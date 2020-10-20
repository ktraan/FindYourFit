const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user");

// Get All Users
router.get("/", async (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

// Create a User
router.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    });
    const newUser = await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

// Delete User
router.delete("/:id", async (req, res) => {
  let user;
  try {
    user = await User.findByIdAndDelete(req.params.id);
    await user.remove();
    res.send("Deleted!");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
