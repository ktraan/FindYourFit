const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Creator is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone is required"]
    },
    // email: {
    //     type: String,
    //     required: [true, "Email is required"]
    // },
    website: {
        type: String,
    },
    occupation: {
        type: String,
        required: [true, 'Occupation is required']
    },
    summary: {
        type: String,
        required: [true, 'Listing summary is required'],
        maxlength: [250, 'Summary cannot exceed 250 characters']
    },
    yearsExperience: {
        type: String,
        default: "0"
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
    },
    profilePicture: {
        type: String, 
    }

})

module.exports = mongoose.model("Listing", listingSchema)