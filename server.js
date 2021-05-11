/**
 * 1. Creating an express server
 * 2. Connecting to mongodb
 * 3.  Initialize express
 * 4. Initialize express middleware
 * 5. creating a simple GET request
 * 6. Inject our Routes
 * 7. Listen to our app connection
 */

const express = require('express');
const connectDB = require('./db');
require('dotenv').config() // use environmental variables in .env
const { PORT } = process.env;

// Connect to db
connectDB();

// Initialize express and express middleware
const app = express();
app.use(express.json({ extended: false }));

// Create a basic express route
app.get('/', (req, res) => {
    return res.json({message: "Welcome to Tutoring App!"})
});

// PORT
const port = process.env.PORT || PORT;

// Listen to connection
app.listen(port, () => {console.log(`App running on ${port}`)});