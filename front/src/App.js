import React from 'react'
import Header from './Header.js'
import SearchInput from './SearchInput'

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SearchInput />
      </div>
    </>
  )
}
