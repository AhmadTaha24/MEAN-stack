const AuthorsModel = require('../models/authors.models');
const {validationResult} = require('express-validator');

//***getting images with multer***//
const multer = require('multer')
//setting up storage property
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        //path to save images locally
        cb(null, 'images')
    },
    filename: (req, file, cb)=>{
        console.log(req.body);
        //creating image name which is (name of the model + id)
        cb(null, `authors-${req.body["id"]}.${file.mimetype.split('/')[1]}`)
        
    }
})
//applying storage propery to multer
const upload = multer({storage: storage})
//******//



let readAll =(req, res)=>{
    //return erro if not number provided in the url
    if(!validationResult(req).isEmpty()){
        return res.json(validationResult(req))
    }
    //***pagination part ***//
    const itemsPerPage = 2;
    const pageNo = req.params.page || 0;
    AuthorsModel.find({},)

    .skip((pageNo-1)*itemsPerPage)
    .limit(itemsPerPage)
    //******//
    .then((data)=>{res.json(data)})
    .catch((err)=>res.json(err))
    
};
    
    
    

let create =(req, res)=>{
   
    
    const errorVal =validationResult(req);
    //
            if(!errorVal.isEmpty()){
     //           return res.json(errorVal.array())
            }
    req.body.img = "";
    AuthorsModel.create(
        req.body
    )
    .then((data)=> res.json(data))
    .catch((error)=> res.json(error))};


let del = (req, res)=>{
    AuthorsModel.findByIdAndDelete(req.params.id)
    .then(()=> res.json("deleted succsess"))
    .catch((deleted)=> res.json(deleted))
}

let update = (req,res) =>{
     
    AuthorsModel.findByIdAndUpdate(req.params.id, req.body )
    
    .then(()=>res.json(req.body))
    .catch((error)=>res.json(error))
}

let addImage = (req, res) =>{
    AuthorsModel.findByIdAndUpdate(req.body.id, {
        imageUrl: `/images/authors-${req.body.id}`
    })
    .then(()=>res.json(req.body))
    .catch((error)=>res.json(error))
}

module.exports = {del,create, readAll, update, addImage, upload}