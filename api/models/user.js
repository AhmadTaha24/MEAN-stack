const mongoose = require("mongoose");
const validator = require("validator")

const userschema = new mongoose.Schema({
    first_name :{type :String, default:null},
    last_name : {type : String, default:null},
    email : {
        type:String,
        unique:true,
        required:[true,'please provide your email'],
        lowerase : true,
        validate:[validator.isEmail,'please provide a vaild email'] 
    },
    photo:{
        type:String
    },

    password : {
        type : String,   
        required:[true,'Please provide password'],
        minlength:8
    
    },
    passwordConfirm:{
        type :String,
        required:[true,'please confirm your password'],
        // this only works on create and save  
        validate:{
            validator:function(el){
                return el === this.password
            },
            massage:'password are not the same!'
        }
    },

    token : {
        type : String
    },
   role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    } ,
 
});


module.exports = mongoose.model('user',userschema);