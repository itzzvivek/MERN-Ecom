const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true
    },

    description: {
        type: String,
        required: [true, "Please Enter Description"]
    },

    price: {
        type: Number,
        required: [true, "Please Enter product Price"],
        maxLength: [8, "Price can't exceed 8 character"]
    },

    rating: {
        type: Number,
        default: 0
    },

    images: [
        {
            public_id: {
                type: String,
                required: true
            },

            url: {
                type: String,
                required: true
            }
        }
    ],

    category: {
        type: String,
        required: [true, "Please Enter Product Category"]

    },

    stock: {
        type: Number,
        required: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 character"],
        default: 1
    },

    numOfReviews: {
        type: Number,
        default: 0
    },

    reviews: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },

            comment: {
                type: String,
                required: true
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);