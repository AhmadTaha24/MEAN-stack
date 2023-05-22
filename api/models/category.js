const mongoose =require('mongoose')

const categorySchema=new mongoose.Schema({
    name:String,

})
// real table name=user, schema=userSchema
const categoryModel=mongoose.model("category",categorySchema)
module.exports= categoryModel