const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////////////////////////////////////////
const authorsSchema =new Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        dateOfBirth: {type: Date, required:true},
        imageUrl:{type: String},
        fullName:{type: String,
        default: function(){
            return this.firstName+'-'+this.lastName
        }, 
        unique: true
        
    }
    },
    {toJSON:{ virtuals: true }}

)
// authorsSchema.virtual('fullName').get(
//     function(){
//         return this.firstName+'-'+this.lastName
//     }
// )

const authorModel = mongoose.model("authors", authorsSchema);

module.exports = authorModel;