const BooksModel = require('../models/books.models');
const {validationResult} = require('express-validator');
const multer = require('multer')
const review = require("../models/reviewModel");

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'images')
    },
    filename: (req, file, cb)=>{
        console.log(req.body);
        cb(null, `books-${req.body["id"]}.${file.mimetype.split('/')[1]}`)
        
    }
})
const upload = multer({storage: storage})


let readAll =(req, res)=>{
    if(!validationResult(req).isEmpty() || parseInt(req.params.page)<=0){
        return res.json(validationResult(req))
    }
    //pagination part
    const itemsPerPage = 2;
    const pageNo = req.params.page || 0;
    BooksModel.find({},)
    .skip((pageNo-1)*itemsPerPage)
    .limit(itemsPerPage)
    //
    .populate('authorId')
    .then((data)=>{res.json(data)})
    .catch((err)=>res.json(err))
    
};
    
let getbookReview = async (req, res) => {

    try {
        const reviews = await review.find({ book: req.params.id });
        
        res.status(200).json(reviews);
    }

    catch (err) {
        res.status(500).json(err)
    }

}
    

let create =(req, res)=>{
   
    
    const errorVal =validationResult(req);
        
            if(!errorVal.isEmpty()){
                return res.json(errorVal.array())
            }
    req.body.img = "";
    BooksModel.create(
        req.body
    )
    .then((data)=> res.json(data))
    .catch((error)=> res.json(error))};


let del = (req, res)=>{
    BooksModel.findByIdAndDelete(req.params.id)
    .then(()=> res.json("deleted succsess"))
    .catch((deleted)=> res.json(deleted))
}

let update = (req,res) =>{
     
    BooksModel.findByIdAndUpdate(req.params.id, req.body )
    
    .then(()=>res.json(req.body))
    .catch((error)=>res.json(error))
}

let addImage = (req, res) =>{
    BooksModel.findByIdAndUpdate(req.body.id, {
        imageUrl: `/images/authors-${req.body.id}`
    })
    .then(()=>res.json(req.body))
    .catch((error)=>res.json(error))
}

module.exports = {del,create, readAll, upload, addImage, update,getbookReview}