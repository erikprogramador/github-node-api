const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const express = require('express')
const mysql = require('mysql')
var cors = require('cors')
const app = express()
const PORT = 3000
const githubBaseUrl = 'https://api.github.com/'

app.use(cors())

app.use(bodyParser.json())

function connect() {
  return new Promise((resolve, reject) => {
    const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'secret',
      database: 'githubapi'
    })

    db.connect(err => {
      if (err) {
        reject(err)
      }
    })

    resolve(db)
  })
}

function selectQuery(userId = null) {
  return `SELECT
  users.id as user_id,
    users.name,
    users.username,
    users.avatar,
    users.url,
    users.location,
    users.description,
    user_informations.repositories as repositories_count,
    user_informations.gists as gists_count,
    user_informations.followers as followers_count,
    user_informations.following as following_count
FROM users
  INNER JOIN user_informations ON user_informations.user_id = users.id
    WHERE ? LIMIT 1`
}

async function createUser(user) {
  const connection = await connect()
  return new Promise((resolve, reject) => {
    const insert = 'INSERT INTO users SET ?'
    connection.query(insert, user, async (err, result, fields) => {
      if (err) reject(err)

      resolve(result.insertId)
    })
  })
}

async function createInformations(informations, userId) {
  const connection = await connect()
  return new Promise((resolve, reject) => {
    const insert = 'INSERT INTO user_informations SET ?'

    connection.query(
      insert,
      { ...informations, user_id: userId },
      async (err, result, fields) => {
        if (err) reject(err)

        resolve(result.insertId)
      }
    )
  })
}

async function createRepositories(repositories, userId) {
  const connection = await connect()

  return new Promise((resolve, reject) => {
    let insert = 'INSERT INTO repositories SET ?'

    let promises = []
    for (repo of repositories) {
      promises.push(
        new Promise((rv, rj) =>
          connection.query(
            insert,
            { ...repo, user_id: userId },
            async (err, result, fields) => {
              if (err) rj(err)

              rv(result)
            }
          )
        )
      )
    }

    Promise.all(promises)
      .then(resolve)
      .catch(reject)
  })
}

async function findUser(userId) {
  const connection = await connect()
  return new Promise((resolve, reject) => {
    connection.query(
      selectQuery(userId),
      { user_id: userId },
      async (err, result, fields) => {
        if (err) reject(err)

        resolve(await matchRepositories(result[0]))
      }
    )
  })
}

async function matchRepositories(user) {
  const connection = await connect()
  return new Promise((resolve, reject) => {
    const select = 'SELECT * FROM repositories WHERE ?'

    connection.query(
      select,
      { user_id: user.user_id },
      async (err, result, fields) => {
        if (err) reject(err)

        resolve({ user, repositories: result })
      }
    )
  })
}

async function recordGithubProfile({ user, repositories, informations }) {
  const id = await createUser(user)
  await createInformations(informations, id)
  await createRepositories(repositories, id)

  return await findUser(id)
}

async function loadUser(username) {
  const response = await fetch(`${githubBaseUrl}users/${username}`)
  const result = await response.json()

  return {
    profile: {
      name: result.name,
      username: result.login,
      profile_id: result.id,
      avatar: result.avatar_url,
      url: result.html_url,
      location: result.location,
      description: result.bio,
      provider: 'github'
    },

    informations: {
      repositories: result.public_repos,
      gists: result.public_gists,
      followers: result.followers,
      following: result.following
    }
  }
}

async function loadRepositories(username) {
  const response = await fetch(`${githubBaseUrl}users/${username}/repos`)
  const result = await response.json()

  return result.map(repo => ({
    name: repo.name,
    url_name: repo.full_name,
    url: repo.html_url,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    watchers: repo.watchers_count
  }))
}

async function loadGithubProfile(username) {
  const { profile: user, informations } = await loadUser(username)
  const repositories = await loadRepositories(username)

  return { user, repositories, informations }
}

app.get('/', function(req, res) {
  res.status(200).json({
    message: 'Keep de world safe!'
  })
})

app.get('/buscar/:username', async function(req, res) {
  const username = req.params.username
  const select = 'SELECT id FROM users WHERE ? LIMIT 1'

  const connection = await connect()

  connection.query(select, { username }, async (err, result, fields) => {
    if (err) throw err

    let user
    if (result.length === 0) {
      user = await recordGithubProfile(await loadGithubProfile(username))
    } else {
      user = await findUser(result[0].id)
    }

    res.status(200).json({
      user
    })
  })
})

/**
 * Route to list recorded profiles
 */
app.get('/usuarios', async function(req, res) {
  const select = `SELECT
      users.id as user_id,
      users.name,
      users.username,
      users.avatar,
      users.url,
      users.location,
      users.description,
      user_informations.repositories as repositories_count,
      user_informations.gists as gists_count,
      user_informations.followers as followers_count,
      user_informations.following as following_count
  FROM users
    INNER JOIN user_informations ON user_informations.user_id = users.id`

  const connection = await connect()

  connection.query(select, async (err, result, fields) => {
    if (err) throw err

    const users = await Promise.all(
      result.map(async user => await matchRepositories(user))
    )

    res.status(200).json({
      users
    })
  })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
