import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)
    onSearch(value)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="이름 또는 전화번호로 검색..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar

