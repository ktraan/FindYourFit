const Listing = require('../models/listing');

const getAllListings = async (req, res) => {

  try {
    const listings = await Listing.find().populate('creator');
    if (!listings) {
      throw new Error("No listings found")
    }
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({message: "Internal Server Error"})
  }
}

const getSingleListing = async (req, res) => {
  try {
    const singleListing = await Listing.findById(req.params.id)
    if (!singleListing) {
      throw new Error("Listing could not be found")
    }
    res.status(200).json(singleListing);

  } catch (error) {
    res.status(500).json({message: "Internal Server Error"})
  }
}

const createListing = async (req, res) => {
    try {
        const newListing = await Listing.create(req.body);
        return res.status(201).json(newListing);
    } catch (error) {
      if (error.name === "ValidationError" ) {
        return res.status(422).json({message: error})
      }
      return res.status(500).json(error);
    }
}

module.exports = {
    getAllListings,
    getSingleListing,
    createListing,
}