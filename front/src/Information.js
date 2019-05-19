import React from 'react'

export default function Information({ user }) {
  return (
    <div style={styles.main}>
      <div style={styles.block}>
        <i className="mdi mdi-folder-network-outline" style={styles.icon} />
        <span style={styles.label}>{user.repositories_count}</span>
      </div>

      <div style={styles.block}>
        <i className="mdi mdi-file-document-box-outline" style={styles.icon} />
        <span style={styles.label}>{user.gists_count}</span>
      </div>

      <div style={styles.block}>
        <i
          className="mdi mdi-account-badge-horizontal-outline"
          style={styles.icon}
        />
        <span style={styles.label}>{user.following_count}</span>
      </div>

      <div style={styles.block}>
        <i className="mdi mdi-eye-outline" style={styles.icon} />
        <span style={styles.label}>{user.followers_count}</span>
      </div>
    </div>
  )
}

const styles = {
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  block: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '25%'
  },
  icon: {
    fontSize: '1.5rem',
    color: 'var(--muted)'
  },
  label: {
    color: 'var(--primary)',
    fontSize: '.8rem',
    fontWeight: '600'
  }
}
