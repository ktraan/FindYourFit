const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const userController = require('../controllers/user_controller')


// Get All Users
router.get("/", userController.getAllUsers);

// Create a User
router.post("/", userController.createUser);

// Delete User
router.delete("/:id", userController.deleteUser);

module.exports = router;

