// Importing required modules
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require("method-override");

// parse env variables
require('dotenv').config();

// Configuring port
const port = process.env.PORT || 3000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Mongo Connection
// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// const db = mongoose.connection;
// db.on("error", (error) => console.log(error));
// db.once("open", () => console.log("Connected to Mongoose"))

// Defining route middleware
app.use('/api', require('./routes/api'));
app.use('/register', require('./routes/register'))
app.use('/login', require('./routes/login'))
app.use('/users', require('./routes/users'))

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
