// backend/routes/search.js
const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const { DataTypes, Op } = require('sequelize');

// Define the Book model
const Book = sequelize.define('Book', {
    book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    title: DataTypes.STRING,
    authors: DataTypes.STRING,
    // Other fields as needed
}, {
    tableName: 'books',
    timestamps: false,
});

// Search for books by title or author
router.get('/', async (req, res) => {
    const { query } = req.query; // Get search query from request

    try {
        const books = await Book.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.like]: `%${query}%` } },  // Search by title
                    { authors: { [Op.like]: `%${query}%` } } // Search by author
                ]
            }
        });
        res.json(books);
    } catch (error) {
        res.status(500).send('Error searching books');
    }
});

module.exports = router;
