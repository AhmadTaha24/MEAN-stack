const express =require("express");
const router = express.Router();
const user = require("../models/user")
router.get("/",async(req,res)=>{

   const getalluser =  await user.find({});
   res.status(200).json(getalluser)
});

module.exports = router;
 