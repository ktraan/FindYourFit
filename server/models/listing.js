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
    experience: {
        type: String,
    },
    education: {
        type: String,
    },
    listingType: {
        type: String,
        required: [true, "Type of listing is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    reviews: {
        type: Array
    }

})