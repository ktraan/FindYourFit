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
    const singleListing = await Listing.findById(req.params.id).populate('creator')
    if (!singleListing) {
      throw new Error("Listing could not be found")
    }
    res.status(200).json(singleListing);

  } catch (error) {
    res.status(500).json({message: "Internal Server Error"})
  }
}

const getSingleListingByEmail = async (req, res) => {
  try {
    console.log(req.body.email)
    const singleListing = await Listing.findOne({email: req.body.email}).exec()
    if (singleListing) {
      return res.status(200).json(singleListing);
    } else {
      res.status(204).json({message: "Listing not found"})
    }
  } catch(error) {
    res.status(500).json(error)
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

const updateListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
      new: true,
      runValidators: true
    })
    res.status(200).json(listing)
  } catch (error) {
    if (res.status === 422) {
      res.json({message: "Problem updating listing, check the data and try again."})
    }
    res.status(500).json(error)
  }
}

const deleteListing = async (req, res) => {
  let listing;
  try {
      listing = await Listing.findById(req.params.id)
      if (listing) {
        listing.remove()
        res.status(200).json({message: "Listing has been deleted!"})
      } else {
        res.json({ message: `Couldn't find Listing with ID ${req.body.id}`})
      }
  } catch (error) {
    if (error) {
      
      res.status(500).json(error)
    }
  }
}

module.exports = {
    getAllListings,
    getSingleListing,
    getSingleListingByEmail,
    createListing,
    updateListing,
    deleteListing,
}