require("dotenv").config();
const PORT = process.env.SERVER_PORT ||5555
const MONGOOSE_URL = process.env.MONGOOSE_URL
const ATLAS_URL = process.env.ATLAS_URL

const express = require('express');
const mongoose = require('mongoose');

//***routes***//
const categoryRouter=require('./routes/category')
const registerRouter =require('../api/routes/register');
const loginRouter = require('../api/routes/login');
const bookRouter = require('./routes/books.routes');
const authorRouter = require('./routes/authors.routes');
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");
const shelvesRouter = require('./routes/shelves.routes')
// const ATLAS_URL=process.env.ATLAS_URL




//******//
const app =express()

app.use(express.json())
app.use('/category', categoryRouter)

app.use('/register',registerRouter);
app.use('/login',loginRouter);


app.use('/books', bookRouter)
app.use('/authors', authorRouter)

app.use('/reviews', reviewRouter)
app.use('/user',userRouter )

app.use('/shelves',shelvesRouter)

//to clear all data in the books model
//should be deleted after developing
app.delete('/deleteAll',(req, res)=>{
    require('./models/books.models').deleteMany({}).then(res.json("done"))
})
app.delete('/deleteAllauth',(req, res)=>{
    require('./models/authors.models').deleteMany({}).then(res.json("done"))
})







// not found middleware
app.use((requset,response)=>{
    response.status(404).json({massage :"not found"})
});


mongoose.connect(ATLAS_URL,
{useNewUrlParser: true, useUnifiedTopology:true},)
.then(()=>console.log("Db connected")
).catch((err)=>(console.log(err)));
 
module.exports = mongoose;



app.listen(PORT,(err)=>{
    if(!err){
        return (console.log(`server start at port ${PORT}`));
    }

    }
)
