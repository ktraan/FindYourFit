const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller')

// Get All Users
router.get("/", userController.getAllUsers);

// Get single user
router.get('/:id', userController.getSingleUser);

// Delete User
router.delete("/:id", userController.deleteUser);

module.exports = router;