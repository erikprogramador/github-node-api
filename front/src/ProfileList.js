import React from 'react'
import Profile from './Profile'

export default function RepoList({ profiles, removeProfile }) {
  return (
    <div style={styles.profilesContainer}>
      <div style={styles.cardContainer}>
        <div style={styles.cardItem}>
          {profiles.map((profile, index) => (
            <Profile
              key={profile.user.user_id}
              profile={profile}
              removeProfile={removeProfile}
            />
          ))}
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
    width: '375px',
    margin: '0 1rem'
  }
}
