const AuthorsModel = require('../models/authors.models');
const { validationResult } = require('express-validator');
const fs = require('fs');


//**delete image function */
function delImg(filename) {
    fs.unlink('images/' + filename, (err) => {
        if (err) {
            console.log(err);
            return ""
        }
        console.log("Delete File successfully.");
    })

}

//***getting images with multer***//
const multer = require('multer')
//setting up storage property
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //path to save images locally
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        console.log(req.body);
        //creating image name which is (name of the model + id)
        cb(null, `authors-${req.body["firstName"]}-${req.body["lastName"]}.${file.mimetype.split('/')[1]}`)

    }
})
//applying storage propery to multer
const upload = multer({ storage: storage })
//******//



let readAll = (req, res) => {
    //return erro if not number provided in the url
    if (!validationResult(req).isEmpty()) {
        return res.json(validationResult(req))
    }
    //***pagination part ***//
    const itemsPerPage = 2;
    const pageNo = req.params.page || 0;
    AuthorsModel.find({},)

        .skip((pageNo - 1) * itemsPerPage)
        .limit(itemsPerPage)
        //******//
        .then((data) => { res.json(data) })
        .catch((err) => res.json(err))

};




let create = (req, res) => {

    const imagePath = `/images/authors-${req.body.firstName}-${req.body.lastName}.png`
    const errorVal = validationResult(req);
    //
    if (!errorVal.isEmpty()) {
        //           return res.json(errorVal.array())
    }

    
    req.body.imageUrl = imagePath;
    
    
    AuthorsModel.create(
        req.body
    )
        .then((data) => res.json(req.body))
        .catch((error) => res.json(error))
};


let del = (req, res) => {

    AuthorsModel.findByIdAndDelete(req.params.id)
        .then((data) => {
            delImg(`authors-${data.firstName}-${data.lastName}.png`)
            res.json(data)
        })
        .catch((deleted) => res.json(deleted))
}

let update = (req, res) => {

    AuthorsModel.findByIdAndUpdate(req.params.id, req.body)

        .then(()=>res.json("done"))
        .catch((error) => res.json(error))
    
}


module.exports = { del, create, readAll, update, upload }