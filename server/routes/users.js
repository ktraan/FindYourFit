const express = require('express');
const router = express.Router();
const User = require('../models/user');

// All Users Route
router.get('/', async (req, res) => {
    res.send("herro")
})

// Get A User

// Create A User
router.post('/', async(req,res) => {
    
})

module.exports = router;
