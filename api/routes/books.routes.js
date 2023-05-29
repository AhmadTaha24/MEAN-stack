const express = require('express');
const { readAll, create, del, upload, addImage, update,getbookReview,getBookById ,booksByCategory } = require('../controllers/books.controllers');
const { body, param } = require('express-validator');
const { verifyToken, restrictTo } = require("../middlewares/authController")
const router = express.Router();


router.get('/:page', param('page').isNumeric(), readAll)

router.get('/cat/:id', booksByCategory)
router.get('/:page/:id',getBookById)

// getting all review that belong to book   
router.get('/reviews/:id', getbookReview)

router.post('/',upload.single('image'), create)

router.post('/', verifyToken, restrictTo("admin"), create, upload.single('img'))



router.post('/test', verifyToken, restrictTo("admin"), upload.single('img'), function (req, res) {
    res.json("fileName");
})



router.delete('/:id', verifyToken, restrictTo("admin"), del)

router.patch('/:id', verifyToken, restrictTo("admin"), update)



router.put('/editimg', verifyToken, restrictTo("admin"), upload.single('image'), addImage)

module.exports = router;