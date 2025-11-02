import './App.css'
import { useState } from 'react'
import ConctactList from './components/ConctactList'
import ContactForm from './components/ContactForm'
import SearchBar from './components/SearchBar'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className='app-container'>
      <h2 className='app-title'>연락처 앱</h2>
      <SearchBar onSearch={handleSearch} />
      <div className='grid-container'>
        <div className='grid-item'>
          <ContactForm></ContactForm>
        </div>
        <div className='grid-item'>
          <ConctactList searchQuery={searchQuery}></ConctactList>
        </div>
      </div>
    </div>
  )
}

export default App