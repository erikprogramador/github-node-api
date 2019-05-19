import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 style={styles.title}>
          <strong>GITC</strong>ompetition
        </h1>
      </div>
    </header>
  )
}

const styles = {
  title: {
    color: 'var(--normal)',
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'normal',
    margin: '2.5rem 0'
  }
}
