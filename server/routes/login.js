const express = require("express");
const router = express.Router();
const passport = require("passport");
const userController = require('../controllers/user_controller')

router.post('/login', passport.authenticate("local"), userController.createUser)


module.exports = router;
