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


// create user code 
// async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const user = new User({
//       username: req.body.username,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       password: hashedPassword,
//       gender: req.body.gender,
//       location: req.body.location,
//       birthday: req.body.birthday
//     });
//     const newUser = await user.save();
    
//     res.send(user).sendStatus(201);
    
//   } catch (error) {
//     console.log(error);
//   }
// }