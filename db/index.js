/**
 * 1. Create a connection function for momngodb
 * 2. Start a local mongodb server connection
 */

const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;

// Create a connection function
// const connectDB = () => {
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
//     })
//     .then(() => {
//         console.log('MongoDB connected!');

//         // Seed data
//     })
//     .catch((err) => {
//         console.log(err.message);

//         // Exit with failure
//         process.exit(1);
//     })
// }

// Async mongoose connection
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB Connected...");
    } catch(err) {
        console.error(err.message)

        // Exit with failure
        process.exit(1);
    }
}

module.exports = connectDB;