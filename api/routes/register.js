const express = require("express");
const { body } = require("express-validator")
const router = express.Router();
const Controller = require("../controllers/registerController");

const { verifyToken, restrictTo } = require("../middlewares/authController")

router.post("/",[

    body("first_name")
        .isAlpha().withMessage(" firstname should be characters")
        .isLength({ min:4}).withMessage(" firstname length must be more than 3 characters "),
    body("last_name")
        .isAlpha().withMessage(" lastname should be characters")
        .isLength({ min: 3 }).withMessage(" lastname length must be more than 3 characters "),

    body("email").isEmail().withMessage("please enter valid email "),

    body('password')
    .isStrongPassword().withMessage(" password must be StrongPassword"),
    
], Controller.createUser);

module.exports = router;
