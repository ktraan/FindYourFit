// Load out .env file if we are in development mode
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Importing required modules
const cors = require("cors");
const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const session = require("express-session");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");

// Routers
const registerRouter = require("./routes/register");

const initializePassport = require("./passport-config");
initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

// Configuring port
const port = process.env.PORT || 3000;

const app = express();

// Configure middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "keyboard dog",
    // Should we resave our session variables when changed?
    resave: false,
    // Save empty values in this session
    saveUninitialized: false,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "html");

// Static folder
app.use(express.static(__dirname + "/views/"));

// Database connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log(`Connected to Database`);
});

// Defining route middleware
app.use("/register", registerRouter);
app.use("/login", require("./routes/login"));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}`);

module.exports = app;
