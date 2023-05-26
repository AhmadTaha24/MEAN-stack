const BooksModel = require('../models/books.models');
const {validationResult} = require('express-validator');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'images')
    },
    filename: (req, file, cb)=>{
        console.log(req.body);
        cb(null, `books-${req.body["title"]}.${file.mimetype.split('/')[1]}`)
        
    }
})
const upload = multer({storage: storage})

//**delete image function */
function delImg(filename) {
    fs.unlink('images/' + filename, (err) => {
        if (err) {
            console.log(err);
            return ""
        }
        console.log("Delete File successfully.");
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
    
    
    

let create =(req, res)=>{
   
    const imagePath = `/images/books-${req.body.firstName}-${req.body.lastName}.png`

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
        delImg(`books-${data.title}.png`)
        res.json(data)
    })
    .catch((deleted)=> res.json(deleted))
}

let update = (req,res) =>{
     
    BooksModel.findByIdAndUpdate(req.params.id, req.body )
    
    .then(()=>res.json(req.body))
    .catch((error)=>res.json(error))
}

let addImage = (req, res) =>{
    BooksModel.findByIdAndUpdate(req.body.id, {
        imageUrl: `/images/books-${req.body.id}`
    })
    .then(()=>res.json(req.body))
    .catch((error)=>res.json(error))
}

module.exports = {del,create, readAll, upload, addImage, update}