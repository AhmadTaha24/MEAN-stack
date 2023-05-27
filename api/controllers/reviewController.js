
const reviewModel = require("../models/reviewModel");

// calculate avgavgRatting
const avgRatting = async (id) => {
    const avg = await reviewModel.find({ book: id })
    let total = 0;
    for (rate of avg) {
        total = total + rate.ratting;
    }
    const avgratting = total / avg.length;

    return avgratting
}

exports.getAllReview = async (req, res, next) => {

    let reviews = await reviewModel.find({})
    try {
        const filterReviews = await Promise.all(reviews.map(async (el) => {

            let afg = await avgRatting(el.book.id)
            // append avg ratting to review data
            let arr = [el, { avgRatting: afg }]

            return arr
        }))

        res.status(200).json(filterReviews)
    }

    catch (err) {
        res.status(500).json(err);
    }
}



exports.getReview = async (req, res, next) => {
    try {
        const getreview = await reviewModel.findById({ _id: req.params.id })
        res.status(200).json({
            status: "success",
            data: getreview
        })
    } catch (err) {
        res.status(500).json(err)
    }
}
exports.createReview = async (req, res, next) => {
    try {
        const newReview = await reviewModel.create(req.body)
        res.status(200).json({
            status: "success",
            data: { review: newReview },
        })
    } catch (err) {
        res.status(400).json(err);
    }
}

exports.updateReview = async (req, res, next) => {
    try {
        await reviewModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            status: "success",
            data: req.body
        });
    } catch (err) {
        res.status(500).json(err)
    }

}

exports.deleteReview = async (req, res, next) => {
    try {
        await reviewModel.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted successful")
    } catch (err) {
        res.status(500).json(err)
    }
}