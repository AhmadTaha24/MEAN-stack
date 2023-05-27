const express = require("express");
const {getAllReview,createReview,avgRatting,updateReview,deleteReview,getReview} = require("../controllers/reviewController");
const {verifyToken,restrictTo} = require("../middlewares/authController")
const router = express.Router();

router.get("/",verifyToken,getAllReview);

router.get("/:id",verifyToken,getReview);

router.post("/",verifyToken,createReview);

router.put("/:id",verifyToken,updateReview);

router.delete("/:id",verifyToken,deleteReview);

module.exports = router;

