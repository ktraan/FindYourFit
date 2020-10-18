const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller')
const bcrypt = require('bcrypt');
const passport = require('passport');


// All Users Route
router.get('/', userController.readData);

router.post('/', async (req, res) => {

})

module.exports = router