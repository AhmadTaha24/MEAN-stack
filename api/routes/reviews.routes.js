const express = require('express');
const { readAll, create, del, update} = require('../controllers/reviews.controller');
const {body, param} = require('express-validator');

const router =  express.Router();


router.get('/', readAll)


router.post('/', create)



router.delete('/:id', del)

router.patch('/:id', update)




module.exports = router;