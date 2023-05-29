const BooksModel = require('../models/books.models');
const {validationResult} = require('express-validator');
const multer = require('multer')
const review = require("../models/reviewModel");
const fs = require('fs');

//setting up storage property
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        //path to save images locally

        cb(null, 'images')
    },
    filename: (req, file, cb)=>{
        console.log(req.body);

        cb(null, `books-${req.body["title"]}.${file.mimetype.split('/')[1]}}`)
        
    }
})
//applying storage propery to multer
const upload = multer({storage: storage})
//******//


//**delete image function */
function delImg(filename) {
    fs.unlink('images/' + filename, (err) => {
        if (err) {
            console.log(err);
            return "error cannot find file"+err
        }
        console.log("Delete File successfully.");
    })

}
//**renaming image */
function renameImg(oldFileName, newFileName){
    fs.rename('images/'+oldFileName, 'images/'+newFileName,(err) => {
        if (err) {
            console.log(err);
            return "error cannot find file"+err
        }
        console.log("Renamed successfully.");
    })
}
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
    .populate('categoryId')
    .then((data)=>{res.json(data)})
    .catch((err)=>res.json(err))
    
};


   let getBookById = async (req, res, next) => {

    // const id= req.params.id
    // res.send(id);
        try {
          const book = await BooksModel.findById(req.params.id).populate('categoryId').populate('authorId');

          if (!book) {
            return res.status(404).json({
              status: "fail",
              message: "Book not Found",
            });
          }
          res.status(200).json({
            status: "success",
            data: {
              book,
            },
          });
        } catch (error) {
          next(error);
        }
      
}



    
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

    const imageExtention   = req.file.mimetype.split('/')[1];

    const imagePath = `/images/books-${req.body.title}.${imageExtention}`

    const errorVal =validationResult(req);
        
            if(!errorVal.isEmpty()){
                return res.json(errorVal.array())
            }
    req.body.imageUrl = imagePath;

    BooksModel.create(
        req.body
    )
    .then((data)=> res.json(data))
    .catch((error)=> res.json(error))};


let del = (req, res)=>{   
    
    BooksModel.findByIdAndDelete(req.params.id)
    .then((data) => {
        const fileName = data.imageUrl.split('/')[2]

        delImg(fileName)
        res.json(data)
    })
    .catch((err)=> res.json(err))
}

let update = (req,res) =>{
    /////start of update image
    //**updating the  image name if firstname and lastname name going to change */

     if(req.body.title){
        req.body.imageUrl = `/images/books-${req.body.title}.png`
        BooksModel.findByIdAndUpdate(req.params.id, req.body )
        
        .then((data)=>{
            /////setting the new filename which we get from the reques and old file name that we get from data

            const oldFileName = `books-${data.title}.png`;
            const newFileName = `books-${req.body.title}.png`;
            renameImg(oldFileName,newFileName)  ////calling the renameImg that rename image locally
            res.json(req.body)
        })
        .catch((error)=>res.json(error))
     }
     /////end of update image

     else{
        BooksModel.findByIdAndUpdate(req.params.id, req.body )
    
        .then(()=>res.json(req.body))
        .catch((error)=>res.json(error))
    }

}
    

let addImage = (req, res) =>{
    BooksModel.findByIdAndUpdate(req.body.id, {
        imageUrl: `/images/books-${req.body.id}`
    })
    .then(()=>res.json(req.body))
    .catch((error)=>res.json(error))
}

module.exports = {del,create, readAll, upload, addImage, update,getbookReview,getBookById}