const express = require('express');
const mongoose = require('mongoose');
 require("dotenv").config();
const categoryRouter=require('./routes/category')


 const PORT = process.env.SERVER_PORT ||5555
 const MONGOOSE_URL = process.env.MONGOOSE_URL
  
const registerRouter =require('../api/routes/register');
const loginRouter = require('../api/routes/login');

const app =express()
app.use(express.json())
app.use('/category', categoryRouter)

app.use('/register',registerRouter);
app.use('/login',loginRouter);



// not found middleware
app.use((requset,response)=>{
    response.status(404).json({massage :"not found"})
});



mongoose.connect( MONGOOSE_URL,
{useNewUrlParser: true, useUnifiedTopology:true},)
.then(()=>console.log("Db connected")
).catch((err)=>(console.log(err)));
 
    



app.listen(PORT,(err)=>{
    if(!err){
        return (console.log(`server start at port ${PORT}`));
    }

    }
)
