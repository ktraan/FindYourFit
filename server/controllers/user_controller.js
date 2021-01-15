const User = require('../models/user')
const bcrypt = require('bcrypt');

const getAllUsers = (req, res) => {
    User.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
}

createUser = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      gender: req.body.gender,
      location: req.body.location,
      birthday: req.body.birthday
    })
    
    User.create(user).then((data) => {
        console.log("User has been created!")
        res.status(201).json(data)

    }).catch((error) => {
        console.log(error)
        res.status(500).json(error);
    })
}

login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
      res.status(400).json({ message: "User doesn't exist"})
    }
    else if(!bcrypt.compareSync(req.body.password, user.password)) {
      res.status(400).json({ message: "The password is invalid" });
    } else (
      res.status(200).json(user)  
    )
    
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

deleteUser = async (req, res) => {
    User.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete User with id=${id}.`
          });
        } else {
          res.send({
            message: "User was deleted successfully!"
          });
        }
      }).catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + req.params.id
        });
      });
}

module.exports = {
    getAllUsers,
    createUser,
    login,
    deleteUser,
}