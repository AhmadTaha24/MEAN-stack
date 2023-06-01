const express = require('express');
const { readAll, create, del, upload, addImage, update,getbookReview, booksByCategory, readAllNoPage } = require('../controllers/books.controllers');
const { body, param } = require('express-validator');
const { verifyToken, restrictTo } = require("../middlewares/authController")
const router = express.Router();


router.get('/:page', param('page').isNumeric(), readAll)

router.get('/', readAllNoPage)

router.get('/cat/:id', booksByCategory)

// getting all review that belong to book   
router.get('/reviews/:id', getbookReview)

router.post('/',upload.single('image'), create)

//router.post('/', verifyToken, restrictTo("admin"), create, upload.single('img'))



router.post('/test', verifyToken, restrictTo("admin"), upload.single('img'), function (req, res) {
    res.json("fileName");
})



router.delete('/:id', del)

router.patch('/:id',upload.single('image'),  update)



router.put('/editimg', verifyToken, restrictTo("admin"), upload.single('image'), addImage)

module.exports = router;