
const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken"); 


exports.createToken = async (req,res)=>{

    try{
        // get user input 
       const  {email,password} =req.body
    
        // validate user input 
        if(!(email&&password)){
          return  res.status(404).send("All input is required");
        }
    
        // validate if user exist in our database
        const user = await User.findOne({email});
       
        if(user && (await bcrypt.compare(password,user.password))){
    
            // create token
            const token = jwt.sign(
                { user_id: user._id, email},
            process.env.TOKEN_KEY, // secret key 
            {
              expiresIn: "2h",
            }
            );
    
            // save user token 
            user.token = token;
    
            res.status(200).json({
              status:"success",
              data:user})
        }else{
             res.status(400).json({errormassage:"Invalid Credentials"});
        }
       
    
    } catch (err) {
      res.status(500).json(err);
      }
    
    }