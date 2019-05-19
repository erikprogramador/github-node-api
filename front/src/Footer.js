import React from 'react'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.paragraph}>
        &copy; {new Date().getFullYear()} Erik Vanderlei Fernandes
      </p>
    </footer>
  )
}

const styles = {
  footer: {
    padding: '1rem 0'
  },
  paragraph: {
    textAlign: 'center',
    color: 'var(--normal)',
    fontSize: '0.8rem'
  }
}
