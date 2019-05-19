import React, { useState } from 'react'
import Header from './Header.js'
import SearchInput from './SearchInput'
import ProfileList from './ProfileList'
import Footer from './Footer'

export default function App() {
  const [usernames, setUsernames] = useState([])
  const [profiles, setProfiles] = useState([])

  async function loadFrom(username) {
    if (usernames.includes(username)) {
      return
    }

    try {
      const response = await fetch(`http://localhost:3000/buscar/${username}`)
      const { user } = await response.json()
      setUsernames([...usernames, username])
      setProfiles([...profiles, user])
    } catch (e) {
      console.log(e)
    }
  }

  async function loadAll() {
    try {
      const response = await fetch('http://localhost:3000/usuarios')
      const { users } = await response.json()
      setProfiles(users)
      setUsernames(users.map(user => user.username))
    } catch (e) {
      console.log(e)
    }
  }

  function removeProfile(username) {
    const newUsernames = usernames.filter(name => name !== username)
    const newProfiles = profiles.filter(
      profile => profile.user.username !== username
    )

    setUsernames(newUsernames)
    setProfiles(newProfiles)
  }

  return (
    <>
      <div style={styles.container}>
        <Header />
        <SearchInput loadFrom={loadFrom} loadAll={loadAll} />

        <ProfileList profiles={profiles} removeProfile={removeProfile} />

        <Footer />
      </div>
    </>
  )
}

const styles = {
  container: {
    width: '98%',
    maxWidth: '1024px',
    margin: '0 auto'
  }
}
