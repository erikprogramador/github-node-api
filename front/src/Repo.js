import React from 'react'

export default function Repo() {
  return (
    <div style={styles.body}>
      <a href="#" style={styles.title}>
        BusX <small style={styles.urlName}>erikprogramador/busx</small>
      </a>

      <div style={styles.infos}>
        <div style={styles.info}>
          <i class="mdi mdi-eye-outline" style={styles.infoIcon} />
          <span style={styles.infoLabel}>4</span>
        </div>

        <div style={styles.info}>
          <i class="mdi mdi-star-outline" style={styles.infoIcon} />
          <span style={styles.infoLabel}>4</span>
        </div>

        <div style={styles.info}>
          <i class="mdi mdi-earth" style={styles.infoIcon} />
          <span style={styles.infoLabel}>4</span>
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
