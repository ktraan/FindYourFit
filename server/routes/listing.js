const express = require("express");
const router = express.Router();
const listingController = require('../controllers/listing_controller')

router.get('/:id', listingController.getSingleListing)

router.get('/', listingController.getAllListings)

router.post('/myListing', listingController.getSingleListingByEmail)

router.post('/', listingController.createListing)

router.put('/:id', listingController.updateListing)

router.delete('/:id', listingController.deleteListing)

module.exports = router;
