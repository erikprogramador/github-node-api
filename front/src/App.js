import React from 'react'
import Header from './Header.js'
import SearchInput from './SearchInput'
import ProfileList from './ProfileList'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <div style={styles.container}>
        <Header />
        <SearchInput />

        <ProfileList />

        <Footer />
      </div>
    </>
  )
}

const styles = {
  container: {
    width: '98%',
    maxWidth: '1024px',
    margin: '0 auto'
  }
}
