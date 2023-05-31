const ShelvesModel = require('../models/shelves.models');

const shelvesOptions = ["none", "read", "want to read", "currently reading"]

let readAll =(req, res)=>{
    
    //check if the input is one of the options
    (shelvesOptions.find(x=> x=== req.body.shelve))? "": req.body.shelve ="none"

    ShelvesModel.find({},)

    .populate('bookId')
    .populate('userId')
    .then((data)=>{res.json(data)})
    .catch((err)=>res.json(err))
    
};

  

let create =(req, res)=>{
   
    
    req.body.she
    ShelvesModel.create(
        req.body
    )
    .then((data)=> res.json(data))
    .catch((error)=> res.json(error))};


let del = (req, res)=>{
    ShelvesModel.findByIdAndDelete(req.params.id)
    .then(()=> res.json("deleted succsess"))
    .catch((deleted)=> res.json(deleted))
}

let update = (req,res) =>{
     
    ShelvesModel.findByIdAndUpdate(req.params.id, req.body )
    
    .then(()=>res.json(req.body))
    .catch((error)=>res.json(error))
}



module.exports = {del,create, readAll, update}