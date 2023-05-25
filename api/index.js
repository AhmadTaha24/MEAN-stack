const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./routes/books.routes');
const authorRouter = require('./routes/authors.routes');
require('dotenv').config()
const PORT = process.env.SERVER_PORT ||5555
const MONGOOSE_URL = process.env.MONGOOSE_URL

const multer = require('multer')

const app =express()
app.use(express.json())
//app.use(multer().any())
app.use('/books', bookRouter)
app.use('/authors', authorRouter)

app.delete('/deleteAll',(req, res)=>{
    require('./models/books.models').deleteMany({}).then(res.json("done"))
})

mongoose.connect(MONGOOSE_URL,
{useNewUrlParser: true, useUnifiedTopology:true},)
.then(()=>console.log("Db connected"));
 
module.exports = mongoose;



app.listen(PORT,()=>{

})

app.get('/',(req,res)=>{
    return res.send("it is working!")
})