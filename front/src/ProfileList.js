import React from 'react'
import Profile from './Profile'

export default function RepoList() {
  return (
    <div style={styles.profilesContainer}>
      <div style={styles.cardContainer}>
        <div style={styles.cardItem}>
          <Profile />
        </div>
      </div>
    </div>
  )
}

const styles = {
  profilesContainer: {
    width: '100%',
    padding: '2.5rem 0',
    minHeight: '70vh'
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '-1rem'
  },
  cardItem: {
    width: '30%',
    minWidth: '375px',
    margin: '1rem'
  }
}
