const ReviewsModel = require('../models/reviews.models');

let readAll =(req, res)=>{
 

    ReviewsModel.find({},)


    .then((data)=>{res.json(data)})
    .catch((err)=>res.json(err))
    
};

  

let create =(req, res)=>{
   
    

    ReviewsModel.create(
        req.body
    )
    .then((data)=> res.json(data))
    .catch((error)=> res.json(error))};


let del = (req, res)=>{
    ReviewsModel.findByIdAndDelete(req.params.id)
    .then(()=> res.json("deleted succsess"))
    .catch((deleted)=> res.json(deleted))
}

let update = (req,res) =>{
     
    ReviewsModel.findByIdAndUpdate(req.params.id, req.body )
    
    .then(()=>res.json(req.body))
    .catch((error)=>res.json(error))
}



module.exports = {del,create, readAll, update}