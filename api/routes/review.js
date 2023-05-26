const express = require("express");
const {getAllReview,createReview} = require("../controllers/reviewController");
const {verifyToken,restrictTo} = require("../middlewares/authController")
const router = express.Router();

router.get("/",getAllReview);
router.post("/",verifyToken,createReview);
module.exports =router;