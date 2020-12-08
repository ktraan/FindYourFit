const express = require("express");
const router = express.Router();
const listingController = require('../controllers/listing_controller')

router.get('/:id', listingController.getSingleListing)

router.get('/', listingController.getAllListings)

router.post('/', listingController.createListing)

module.exports = router;
