
const reviewModel = require("../models/reviewModel");


exports.getAllReview = async (req, res, next) => {
    try {
        const reviews = await reviewModel.find({})
        res.status(200).json({
            status:"success",
            data:{review:reviews}
        })

    } catch (err) {
        res.status(400).json(err);
    }
}

exports.getReview =async(req,res,next)=>{
    try{
      const getreview = await reviewModel.findById({_id:req.params.id})
        res.status(200).json({
            status:"success",
            data:getreview
        })
    }catch(err){
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

exports.updateReview = async (req,res,next)=>{
    try{
          await reviewModel.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
        status:"success",
        data:req.body
    });
    }catch(err){
        res.status(500).json(err)
    }
 
}

exports.deleteReview = async(req,res,next)=>{
    try{
        await reviewModel.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted successful")
    }catch(err){
        res.status(500).json(err)
    }
}