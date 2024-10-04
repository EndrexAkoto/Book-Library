// backend/routes/books.js
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize'); // Import Op for Sequelize operators
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new book
router.post('/', async (req, res) => {
  const { title, author, genre, year } = req.body;
  try {
    const book = await Book.create({ title, author, genre, year });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search for books by title or author
router.get('/search', async (req, res) => {
  const { query } = req.query; // Get the search query from the request
  try {
    const books = await Book.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { author: { [Op.like]: `%${query}%` } }
        ]
      }
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
