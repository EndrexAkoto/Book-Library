// frontend/src/components/BookSearch.js
import React, { useState } from 'react'
import axios from 'axios'

const BookSearch = () => {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = () => {
    axios.get(`http://localhost:5000/api/search?query=${query}`)
      .then(response => {
        setSearchResults(response.data)
      })
      .catch(error => {
        console.error('There was an error searching for books!', error)
      })
  }

  return (
    <div>
      <h2>Search for Books</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or author"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map(book => (
          <li key={book.book_id}>
            {book.title} by {book.authors}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookSearch
