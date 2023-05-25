const express = require("express");
const router = express.Router();

const {createToken} = require("../controllers/loginController")

router.post('/',createToken)

module.exports = router