import React from 'react'

export default function Information() {
  return (
    <div style={styles.main}>
      <div style={styles.block}>
        <i class="mdi mdi-folder-network-outline" style={styles.icon} />
        <span style={styles.label}>200</span>
      </div>

      <div style={styles.block}>
        <i class="mdi mdi-file-document-box-outline" style={styles.icon} />
        <span style={styles.label}>10</span>
      </div>

      <div style={styles.block}>
        <i
          class="mdi mdi-account-badge-horizontal-outline"
          style={styles.icon}
        />
        <span style={styles.label}>200</span>
      </div>

      <div style={styles.block}>
        <i class="mdi mdi-eye-outline" style={styles.icon} />
        <span style={styles.label}>15,000</span>
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
