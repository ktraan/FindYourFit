// Load out .env file if we are in development mode
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Importing required modules
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const history = require('connect-history-api-fallback');

// Routes
const userRouter = require('./routes/user');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const listingRouter = require('./routes/listing');

// Configuring port
const port = process.env.PORT || 3000;

const app = express();

// Configure middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(
  session({
    secret: 'keyboard dog',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(history());

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Database connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => {
  console.error(error);
});
db.once('open', () => {
  console.log(`Connected to Database`);
});

// Defining route middleware
app.use('/user', userRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/listing', listingRouter);

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}`);

module.exports = app;
