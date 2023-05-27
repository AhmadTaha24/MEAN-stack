const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, 'Review can not be empty']
    },

    ratting: {
        type: Number,
        min: 0,
        max: 5
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },
    book: {
        type: mongoose.Schema.ObjectId,
        ref: 'books',
        required: [true, "Review must belong to a book"]
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: [true, "Review must belong to a user"]

    }
})

reviewSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'book',
        select: 'title',
    }).populate({
        path: "user",
        select: 'first_name last_name email'
    })
    next();
})
const Review = mongoose.model("review", reviewSchema);

module.exports = Review;

