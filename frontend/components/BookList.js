// frontend/src/components/BookList.js
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BookList = () => {
  const [books, setBooks] = useState([]) // State to hold book data
  const [loading, setLoading] = useState(true) // State to handle loading state
  const [error, setError] = useState(null) // State to handle errors
  const [searchQuery, setSearchQuery] = useState('') // State for search input

  useEffect(() => {
  // Fetch books from the backend
  axios.get('http://localhost:5000/api/books')
    .then(response => {
      console.log('Fetched books:', response.data) // Log fetched books
      setBooks(response.data) // Set the fetched books
      setLoading(false) // Set loading to false
    })
    .catch(error => {
      setError('There was an error fetching the books!') // Set error message
      setLoading(false) // Set loading to false
      console.error(error)
    })
}, [])


  // Handle loading state
  if (loading) return <div>Loading...</div>
  // Handle error state
  if (error) return <div>{error}</div>

  // Filter books based on search query
  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <h2>Book List</h2>
      <input 
        type="text" 
        placeholder="Search by title or author..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <ul>
        {filteredBooks.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
