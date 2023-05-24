const express = require('express');
const mongoose = require('mongoose');
const categoryRouter=require('./routes/category')



const app =express()
app.use(express.json())
app.use('/category', categoryRouter)


mongoose.connect('mongodb://127.0.0.1:27017/MEAN_DB',
{useNewUrlParser: true, useUnifiedTopology:true},)
.then(()=>console.log("Db connected"));
 
    



app.listen(5000,()=>{

})

app.get('/',(req,res)=>{
    return res.send("it is working!")
})