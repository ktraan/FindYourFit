const Listing = require('../models/listing');

const getAllListings = (req, res) => {
    Listing.find()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({message: error})
    })
}

const getSingleListing = (req, res) => {
    Listing.findOne({ _id: req.body.id })
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).json({message: `Could not find this listing with id of ${req.body.id}`})
    })
}

const createListing = (req, res) => {
    const newListing = new Listing({
        creator: req.body.user.id,
        occupation: req.body.occupation,
        summary: req.body.summary,
        experience: req.body.experience,
        education: req.body.education,
        listingType: req.body.listingType,
        reviews: req.body.reviews,
    })

    Listing.create(newListing)
    .then((data) => {
        console.log("Listing has been created!")
        res.status(201).json(data)
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json({message: "Problem creating listing"});
    })
}

module.exports = {
    getAllListings,
    getSingleListing,
    createListing,
}