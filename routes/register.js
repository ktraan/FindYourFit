const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

// Create a User
router.post('/', userController.createUser);

module.exports = router;
