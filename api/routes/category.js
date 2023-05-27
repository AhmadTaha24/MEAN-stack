const express= require('express')
const router= express.Router()
const categoryModel = require('../models/category');
const {verifyToken,restrictTo} = require("../middlewares/authController")

router.get('/',(req,res)=>{
    categoryModel.find({}).then(function (posts,err){
        if(!err) return res.status(200).json(posts)
        res.status(500).json({Error:"DB_ERR"})
    })
})
router.get('/:id',(req,res)=>{
    const { id }= req.params
    categoryModel.find({_id:id}).then(function (postData,err){
        if(!err) return res.status(200).json(postData)
        res.status(500).json({Error:"DB_ERR"})

     })
})

router.post('/',verifyToken,restrictTo("admin"),(req,res) => {
    categoryModel.create({ ...req.body}).then(function(postData,err){
        if(!err) return res.status(200).json({message: "Category successfully created",postData,})
        res.status(500).json({Error:"DB_ERR"}) 
    })
})
router.put('/:id',verifyToken,restrictTo("admin"),(req,res)=>{
    const { id }= req.params
    categoryModel.findByIdAndUpdate(id,req.body).then(function(userData, err){
        if(!err) return res.status(200).json(userData)
        res.status(500).json({message: "User not successful created",error: error.mesage,})
    })
})      


router.delete('/:id',verifyToken,restrictTo("admin"),(req,res)=>{
    const { id }= req.params
    categoryModel.deleteOne({_id:id}).then(function(postData, err){
        if(!err) return res.status(200).json(postData)
        res.status(500).json({Error:"DB_ERR"})
    })

})

module.exports= router