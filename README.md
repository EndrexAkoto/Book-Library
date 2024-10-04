# Book Library

## Overview

Book Library is a web application that allows users to manage a collection of books. Users can add new books, view existing books, and search for books by title or author. This project is built using React for the frontend and Node.js with Express for the backend, with Sequelize as the ORM for database interactions.

## Features

- View a list of all books
- Add new books with title, author, genre, and year of publication
- Search for books by title or author
- Responsive design for both desktop and mobile devices

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express, Sequelize
- **Database**: MySQL
- **Other**: CORS, dotenv

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MySQL (or any other compatible database)

### Installation

1. **Clone the repository**
  
  ```bash
  git clone https://github.com/EndrexAkoto/Book-Library.git
  cd Book-Library
  ```
  
2. **Install backend dependencies**
  
  Navigate to the backend directory and install dependencies:
  
  ```bash
  cd backend
  npm install
  ```
  
3. **Setup the database**
  
  Create a MySQL database for the application and configure the database connection in `db.js`.
  
4. **Run the backend server**
  
  Start the server:
  
  ```bash
  node index.js
  ```
  
  The server will run on `http://localhost:5000`.
  
5. **Install frontend dependencies**
  
  Navigate to the frontend directory and install dependencies:
  
  ```bash
  cd ../frontend
  npm install
  ```
  
6. **Run the frontend application**
  
  Start the development server:
  
  ```bash
  npm start
  ```
  
  The application will be available at `http://localhost:3000`.
  

## API Endpoints

### Books

- **GET** `/api/books` - Retrieve all books
- **POST** `/api/books` - Add a new book (requires JSON body with `title`, `author`, `genre`, and `year`)

### Search

- **GET** `/api/search?query={searchQuery}` - Search for books by title or author

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.