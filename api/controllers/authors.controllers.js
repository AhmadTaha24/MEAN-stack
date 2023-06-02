const AuthorsModel = require('../models/authors.models');
const {validationResult} = require('express-validator');
const fs = require('fs');

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
        cb(null, `authors-${req.body.firstName}-${req.body.lastName}.${file.mimetype.split('/')[1]}`)
        
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
        return "done"
    })
}


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
    

let getauthourById = async (req, res, next) => {

    // const id= req.params.id
    // res.send(id);
        try {
          const authour = await AuthorsModel.findById(req.params.id);

          if (!authour) {
            return res.status(404).json({
              status: "fail",
              message: "authour not Found",
            });
          }
          res.status(200).json({
            status: "success",
            data: {
                authour,
            },
          });
        } catch (error) {
          next(error);
        }
      
}

let readAllNoPage =(req, res)=>{

   
    AuthorsModel.find({},)



    .then((data)=>{res.json(data)})
    .catch((err)=>res.json(err))
    
};
    
    

let create =(req, res)=>{
    const imageExtention   = req.file.mimetype.split('/')[1];
    const imagePath = `http://localhost:5000/img/authors-${req.body.firstName}-${req.body.lastName}.${imageExtention}`

    const errorVal =validationResult(req);
    //
           // if(!errorVal.isEmpty()){
     //           return res.json(errorVal.array())
            //}
    req.body.imageUrl = imagePath;
    AuthorsModel.create(
        req.body
    )
    .then((data)=> res.json(data))
    .catch((error)=> res.json(error))};


let del = (req, res)=>{
    AuthorsModel.findByIdAndDelete(req.params.id)
    .then((data)=> {
        const fileName = data.imageUrl.split('/')[4]
        
        console.log(fileName);
        delImg(fileName);
        res.json("Delete File successfully")
        })
    .catch((deleted)=> res.json(deleted))
}

let update = (req,res) =>{
    
    if(req.body.firstName&& req.body.lastName){
        req.body.imageUrl = `http://localhost:5000/img/authors-${req.body.firstName}-${req.body.lastName}.jpeg`
        if(req.file){
            const imageExtention   = req.file.mimetype.split('/')[1];
            const imagePath = `http://localhost:5000/img/authors-${req.body.firstName}-${req.body.lastName}.${imageExtention}`
            req.body.imageUrl = imagePath
        }

        AuthorsModel.findByIdAndUpdate(req.params.id, req.body )
    
        .then((data)=>{
             /////setting the new filename which we get from the reques and old file name that we get from data
            const oldFileName = `authors-${data.firstName}-${data.lastName}.jpeg`;
            const newFileName = `authors-${req.body.firstName}-${req.body.lastName}.jpeg`;
            
            renameImg(oldFileName,newFileName)  ////calling the renameImg that rename image locally
            
            res.json(req.body)
        })
        .catch((error)=>res.json(error))
    }
    else{
        AuthorsModel.findByIdAndUpdate(req.params.id, req.body )
    
        .then(()=>res.json(req.body))
        .catch((error)=>res.json(error))
    }
   
}

let addImage = (req, res) =>{
    AuthorsModel.findByIdAndUpdate(req.body.id, {
        imageUrl: `/images/authors-${req.body.id}`
    })
    .then(()=>res.json(req.body))
    .catch((error)=>res.json(error))
}

module.exports = {del,create, readAll, update, addImage, upload, readAllNoPage,getauthourById}
