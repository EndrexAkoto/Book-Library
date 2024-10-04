// backend/index.js
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const bookRoutes = require('./routes/books')
process.setMaxListeners(15) // Increase limit, adjust as needed

const app = express()
const port = 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/books', bookRoutes)

// Change force to false to avoid dropping the table on every restart
sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
})
