const express = require("express");
const {body} = require("express-validator")
const {getAllReview,createReview,avgRatting,updateReview,deleteReview,getReview} = require("../controllers/reviewController");
const {verifyToken,restrictTo} = require("../middlewares/authController")
const router = express.Router();

router.get("/",verifyToken,getAllReview);

router.get("/:id",verifyToken,getReview);

router.post("/",[
    body("review")
    .isAlphanumeric().withMessage(" review should be Alphanumeric")
    .isLength({ min: 3 }).withMessage(" review length must be more than 3 characters "),

    body("ratting").isNumeric().withMessage(" ratting should be Numeric")
        
],verifyToken,createReview);

router.put("/:id",verifyToken,updateReview);

router.delete("/:id",verifyToken,deleteReview);

module.exports = router;

