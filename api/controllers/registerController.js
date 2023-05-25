const User = require("../models/user");
const bcrypt = require('bcrypt')

exports.createUser = async (req, res) => {

    const { first_name, last_name, email, password ,passwordConfirm,photo,role} = req.body;

    // validate user input 
    try {
        if (!(first_name && last_name && email && password&&password)) {
            return res.status(400).send("all input is required");
        }
        // check user already exist
        // validate if user in our database
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(409).send("user already Exist. please login");
        }

        // Encrypt user password

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            passwordConfirm : encryptedPassword, 
            role,
            photo,
        });
        user.save(); 
        // return new user 
        res.status(201).json(user);

    } catch (err) {
        res.status(400).json(err);
    }
}

