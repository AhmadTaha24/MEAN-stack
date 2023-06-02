const express = require('express')
const router = express.Router()
const categoryModel = require('../models/category');
const { verifyToken, restrictTo } = require("../middlewares/authController")


router.get('/', (req, res) => {
    categoryModel.find({}).then(function (posts) {
        res.status(200).json(posts)
    })
        .catch(function () {
            res.status(500).json({ Error: "DB_ERR" })
        })
})
router.get('/:id', (req, res) => {
    const { id } = req.params
    categoryModel.find({ _id: id }).then(function (postData) {
        res.status(200).json(postData)

    })
        .catch(function () {
            res.status(500).json({ Error: "Not such id" })
        })
})

router.post('/', verifyToken, restrictTo("admin"), (req, res) => {
    categoryModel.create({ ...req.body }).then(function (postData, err) {
        res.status(200).json({ message: "Category successfully created", postData, })

    })
        .catch(function () {
            res.status(500).json({ message: "Duplicated Category", error: error.mesage, })
        })
})
router.put('/:id', verifyToken, restrictTo("admin"), (req, res) => {
    const { id } = req.params
    categoryModel.findByIdAndUpdate(id, req.body).then(function (userData, err) {
        res.status(200).json(userData)
    })
})


router.delete('/:id', verifyToken, restrictTo("admin"), (req, res) => {
    const { id } = req.params
    categoryModel.deleteOne({ _id: id }).then(function (postData, err) {
        res.status(200).json(postData)
    })

})

module.exports = router