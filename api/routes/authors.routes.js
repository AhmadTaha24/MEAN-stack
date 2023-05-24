const express = require('express');
const { readAll, create, del, update, addImage, upload} = require('../controllers/authors.controllers');
const {body, param} = require('express-validator');

const router =  express.Router();


router.get('/:page',param('page').isNumeric() , readAll)
router.post('/', body(''), create)



router.post('/test',function (req, res){
    res.json("fileName");
})
router.delete('/:id', del)


router.patch('/:id', update)

router.put('/editimg', upload.single('image'), addImage)

module.exports = router;