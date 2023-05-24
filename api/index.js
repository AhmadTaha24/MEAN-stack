const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./routes/books.routes');
const authorRouter = require('./routes/authors.routes');


const multer = require('multer')

const app =express()
app.use(express.json())
//app.use(multer().any())
app.use('/books', bookRouter)
app.use('/authors', authorRouter)

app.delete('/deleteAll',(req, res)=>{
    require('./models/books.models').deleteMany({}).then(res.json("done"))
})

mongoose.connect('mongodb://127.0.0.1:27017/MEAN_DB',
{useNewUrlParser: true, useUnifiedTopology:true},)
.then(()=>console.log("Db connected"));
 
module.exports = mongoose;



app.listen(5000,()=>{

})

app.get('/',(req,res)=>{
    return res.send("it is working!")
})