// backend/routes/borrowHistory.js
const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const { DataTypes } = require('sequelize');

// Define the BorrowHistory model
const BorrowHistory = sequelize.define('BorrowHistory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    borrow_date: DataTypes.DATE,
    return_date: DataTypes.DATE,
}, {
    tableName: 'borrow_history',
    timestamps: false,
});

// Get borrowing history for a user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const history = await BorrowHistory.findAll({
            where: { user_id: userId },
            include: [{
                model: sequelize.models.Book,  // Assuming the Book model is already defined
                as: 'book',  // Use alias if necessary
            }]
        });
        res.json(history);
    } catch (error) {
        res.status(500).send('Error retrieving borrowing history');
    }
});

module.exports = router;
