
const jwt = require("jsonwebtoken");

const config = process.env;

const User = require("../models/user");

let currentUser;

exports.verifyToken  = async (req, res, next) => {
    //1) getting token and check of it's there   
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
    // ckeck if not token 
  if (!token) {
    return res.status(401).send("A token is required for authentication");
  }
  //2) verification token
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    
    req.user = decoded;
    
    //3) check if user still exists 
    const freshuser = await User.findById(decoded.user_id)

  
    if(!freshuser){
      return res.status(401).json("the user belonging to this token does no longer exist ")
    }
    // 4) retrive current user data
   currentUser = await User.findById(decoded.user_id);
   
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  next();
};

 // create Authorization fuction 
exports.restrictTo = (name)=>{
  return (req,res,next)=>{
    // check if roles is [admin or user]
    if(!(name ==  currentUser.role)){
      res.status(403).json("you do not have permission to perform this action");

    }else{
      next(); 
    };
    
}
} 

