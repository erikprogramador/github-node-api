import React from 'react'
import RepoList from './RepoList'
import Information from './Information'

export default function Profile() {
  return (
    <div style={styles.card}>
      <header style={styles.header}>
        <img
          src="https://unsplash.it/200/200"
          alt="Usuario"
          style={styles.avatar}
        />

        <div style={styles.infoBlock}>
          <a href="#" style={styles.title}>
            Erik Vanderlei Fernandes
          </a>

          <Information />
        </div>
      </header>

      <main style={styles.body(true)}>
        <RepoList />
      </main>

      <footer style={styles.footer}>
        <button style={styles.remove}>Remove</button>
      </footer>
    </div>
  )
}

const styles = {
  card: {
    background: 'var(--normal)',
    width: '100%',
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
  title: {
    fontSize: '1.175rem',
    fontWeight: '500',
    color: 'var(--primary)',
    width: '100%',
    textDecoration: 'none',
    marginBottom: '0.5rem'
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
    fontSize: '1rem'
  }
}
