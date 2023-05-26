const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema =new Schema(
    {   
        userId: {type: mongoose.Schema.Types.ObjectId, ref:"user"},
        bookId: {type: mongoose.Schema.Types.ObjectId, ref:"books"},
        review: {type: String, required: true},

    },

)

const ReviewsModel = mongoose.model("reviews", reviewsSchema);

module.exports = ReviewsModel;