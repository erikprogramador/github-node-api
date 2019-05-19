import React from 'react'
import Repo from './Repo'

export default function RepoList() {
  return (
    <>
      <div style={styles.main}>
        <Repo />
      </div>
    </>
  )
}

const styles = {
  main: {
    marginBottom: '-1rem'
  }
}
