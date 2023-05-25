const mongoose =require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const categorySchema=new mongoose.Schema({
    name:{
        type: String,
        unique: [true, 'Please enter unique name for your category'],
        required: [true, 'Please enter name for your category']  
        },

})
// categorySchema.plugin(AutoIncrement, {inc_field: 'id'});

// real table name=user, schema=userSchema
const categoryModel=mongoose.model("category",categorySchema)

module.exports= categoryModel


// const mongoose =require('mongoose')
// const AutoIncrement = require('mongoose-sequence')(mongoose);

// const categorySchema = new mongoose.Schema({
//     _id: Number,required
//     name: String
// }, { _id: false });
// categorySchema.plugin(AutoIncrement);

// // real table name=user, schema=userSchema
// const categoryModel=mongoose.model("category",categorySchema)
// module.exports= categoryModel