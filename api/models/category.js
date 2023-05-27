const mongoose =require('mongoose')

const categorySchema=new mongoose.Schema({
    name:{
        type: String,
        unique: [true, 'Please enter unique name for your category'],
        lowerase : true,
        required: [true, 'Please enter name for your category']  
        },

})
const categoryModel=mongoose.model("category",categorySchema)

module.exports= categoryModel
