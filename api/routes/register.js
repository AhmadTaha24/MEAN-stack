const express =require("express");
const router = express.Router();
const Controller = require("../controllers/registerController");

const{verifyToken,restrictTo} = require("../middlewares/authController")

router.post("/",verifyToken,restrictTo("admin"),Controller.createUser);

module.exports = router;
