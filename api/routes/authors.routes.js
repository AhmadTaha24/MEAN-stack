const express = require('express');
const { readAll, create, del, update, upload,getauthourById} = require('../controllers/authors.controllers');
const {body, param} = require('express-validator');

const router =  express.Router();

router.get('/:page',param('page').isNumeric() , readAll)
router.post('/', upload.single('image'), create)

router.post('/test',function (req, res){
    res.json("fileName");
})
router.delete('/:id', del)

router.get('/:page/:id',getauthourById)


router.patch('/:id', update)


module.exports = router;