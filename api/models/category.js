const mongoose =require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const categorySchema=new mongoose.Schema({
    name:String,

})

categorySchema.plugin(AutoIncrement, {inc_field: 'id'});

// real table name=user, schema=userSchema
const categoryModel=mongoose.model("category",categorySchema)
module.exports= categoryModel