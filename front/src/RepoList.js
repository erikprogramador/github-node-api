import React from 'react'
import Repo from './Repo'

export default function RepoList({ repositories }) {
  return (
    <>
      <div style={styles.main}>
        {repositories.map(repo => (
          <Repo key={repo.id} repository={repo} />
        ))}
      </div>
    </>
  )
}

const styles = {
  main: {
    marginBottom: '-1rem'
  }
}
