const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const passport = require('passport');

// Create a User
router.post('/', passport.authenticate('local'), userController.createUser);

module.exports = router;
