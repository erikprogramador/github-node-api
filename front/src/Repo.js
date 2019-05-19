import React from 'react'

export default function Repo({ repository }) {
  return (
    <div style={styles.body}>
      <a href={repository.url} style={styles.title}>
        {repository.name}{' '}
        <small style={styles.urlName}>{repository.url_name}</small>
      </a>

      <p>{repository.description}</p>

      <div style={styles.infos}>
        <div style={styles.info}>
          <i className="mdi mdi-eye-outline" style={styles.infoIcon} />
          <span style={styles.infoLabel}>{repository.watchers}</span>
        </div>

        <div style={styles.info}>
          <i className="mdi mdi-star-outline" style={styles.infoIcon} />
          <span style={styles.infoLabel}>{repository.stars}</span>
        </div>

        <div style={styles.info}>
          <i className="mdi mdi-earth" style={styles.infoIcon} />
          <span style={styles.infoLabel}>{repository.language}</span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  body: {
    width: '100%',
    display: 'block',
    padding: '1rem',
    boxShadow: 'var(--shadow)',
    marginBottom: '1rem'
  },
  title: {
    fontSize: '1.375rem',
    color: 'var(--primary)',
    fontWeight: '600',
    textDecoration: 'none'
  },
  urlName: {
    fontWeight: '500',
    fontSize: '.8rem',
    color: 'var(--muted)'
  },
  infos: {
    display: 'flex',
    alignItems: 'center'
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '1.5rem'
  },
  infoIcon: {
    marginRight: '.5rem',
    fontSize: '1.5rem',
    color: 'var(--muted)'
  },
  infoLabel: {
    fontWeight: '600',
    color: 'var(--primary)'
  }
}
