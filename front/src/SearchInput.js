import React from 'react'

export default function SearchInput() {
  return (
    <>
      <form style={styles.searchInput}>
        <input
          style={styles.input}
          type="search"
          name="q"
          id="q"
          placeholder="Buscar por nome de usuário..."
        />
        <button style={styles.button}>
          <span className="mdi mdi-magnify" />
        </button>
      </form>
    </>
  )
}

const styles = {
  searchInput: {
    width: '100%',
    maxWidth: '375px',
    background: 'var(--normal)',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '6px',
    overflow: 'hidden',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.10)'
  },
  input: {
    flex: '1',
    background: 'none',
    border: 'none',
    outline: 'none',
    padding: '1rem',
    borderRadius: '6px',
    color: 'var(--primary)'
  },
  button: {
    background: 'var(--gradient)',
    border: 'none',
    color: 'var(--normal)',
    padding: '0.5rem 0.8rem',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderTopRightRadius: '6px',
    borderBottomRightRadius: '6px'
  }
}
