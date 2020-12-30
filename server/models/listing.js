const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    occupation: {
        type: String,
        required: [true, 'Occupation is required']
    },
    summary: {
        type: String,
        required: [true, 'Listing summary is required']
    },
    yearsExperience: {
        type: Number,
    },
    // Education can be degrees, diplomas, certificates
    education: {
        type: Array,
        default: ["None"]
    },
    // Types can be Personal Training, Nutritionist, Health & Wellness
    listingType: {
        type: String,
        required: [true, "Type of listing is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    facebookLink: {
        type: String
    },
    instagramLink: {
        type: String
    },
    youtubeLink: {
        type: String
    },
    twitterLink: {
        type: String
    },

    reviews: {
        type: Array
    }

})

module.exports = mongoose.model("Listing", listingSchema)