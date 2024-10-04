// backend/models/BorrowHistory.js

const { DataTypes } = require('sequelize')
const sequelize = require('../db') // Assuming your db.js is in the backend folder

const BorrowHistory = sequelize.define('BorrowHistory', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  book_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  borrow_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  return_date: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'borrow_history',
  timestamps: false // Assuming you don't want createdAt/updatedAt columns
})

module.exports = BorrowHistory
