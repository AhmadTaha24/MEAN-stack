const express = require('express');
const { readAll, create, del, upload, addImage ,update} = require('../controllers/books.controllers');
const {body, param} = require('express-validator');

const router =  express.Router();


router.get('/:page',param('page').isNumeric() , readAll)


router.post('/',upload.single('image'), create)



router.post('/test',upload.single('img'),function (req, res){
    res.json("fileName");
})



router.delete('/:id', del)

router.patch('/:id', update)


router.put('/editimg', upload.single('image'), addImage)

module.exports = router;