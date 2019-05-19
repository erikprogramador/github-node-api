import React from 'react'
import RepoList from './RepoList'
import Information from './Information'

export default function Profile({ profile, removeProfile }) {
  return (
    <div style={styles.card}>
      <header style={styles.header}>
        <img
          src={profile.user.avatar}
          alt={profile.user.name}
          style={styles.avatar}
        />

        <div style={styles.infoBlock}>
          <a href={profile.user.url} target="_blank" style={styles.title}>
            {profile.user.name}
          </a>

          <Information user={profile.user} />
        </div>
      </header>

      <main style={styles.body(true)}>
        <RepoList repositories={profile.repositories} />
      </main>

      <footer style={styles.footer}>
        <button
          onClick={() => removeProfile(profile.user.username)}
          style={styles.remove}
        >
          Remove
        </button>
      </footer>
    </div>
  )
}

const styles = {
  card: {
    background: 'var(--normal)',
    width: '100%',
    display: 'block',
    padding: '1rem',
    borderRadius: '6px'
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start'
  },
  avatar: {
    width: '100px',
    height: '100px',
    marginRight: '1rem',
    borderRadius: '6px'
  },
  infoBlock: {
    width: '100%'
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: 'var(--primary)',
    width: '100%',
    textDecoration: 'none',
    marginBottom: '1rem'
  },
  body: hasItems => ({
    marginTop: '1rem',
    display: hasItems ? 'block' : 'none'
  }),
  footer: {
    marginTop: '2rem'
  },
  remove: {
    width: '100%',
    background: 'var(--primary)',
    color: 'var(--normal)',
    border: 'none',
    padding: '.7rem 1rem',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer'
  }
}
