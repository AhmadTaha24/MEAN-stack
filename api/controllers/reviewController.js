
const reviewModel =require("../models/reviewModel");

exports.getAllReview = async (req, res, next) => {

    const reviews = await reviewModel.find()
    try {
        res.status(200).json({
            status: "success",
            results: reviews.length,
            data: { reviews },
        })

    } catch (err) {
        res.status(400).json(err);
    }
}

exports.createReview = async (req,res,next)=>{
    try{
        const newReview = await reviewModel.create(req.body)
        res.status(200).json({
            status:"success",
            data:{review:newReview},
        })
    }catch(err){
        res.status(400).json(err);
    }
}