// backend/importBooks.js
const fs = require('fs')
const csv = require('csv-parser')
const mysql = require('mysql2')

// Set up MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_mysql_password', // Replace with your MySQL password
    database: 'library_db', // Replace with your database name
})

// Read CSV file and insert into the database
fs.createReadStream('./data/books.csv') // Adjust path based on your dataset
    .pipe(csv())
    .on('data', (row) => {
        const query = `INSERT INTO books (book_id, goodreads_book_id, best_book_id, work_id, books_count, isbn, 
            isbn13, authors, original_publication_year, original_title, title, language_code, average_rating, 
            ratings_count, work_ratings_count, work_text_reviews_count, ratings_1, ratings_2, ratings_3, 
            ratings_4, ratings_5, image_url, small_image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

        connection.query(query, [
            row.book_id,
            row.goodreads_book_id,
            row.best_book_id,
            row.work_id,
            row.books_count,
            row.isbn,
            row.isbn13,
            row.authors,
            row.original_publication_year,
            row.original_title,
            row.title,
            row.language_code,
            row.average_rating,
            row.ratings_count,
            row.work_ratings_count,
            row.work_text_reviews_count,
            row.ratings_1,
            row.ratings_2,
            row.ratings_3,
            row.ratings_4,
            row.ratings_5,
            row.image_url,
            row.small_image_url
        ], (err, results) => {
            if (err) {
                console.error('Error inserting data:', err)
            } else {
                console.log('Inserted:', results.insertId)
            }
        })
    })
    .on('end', () => {
        console.log('CSV file successfully processed')
        connection.end()
    })
