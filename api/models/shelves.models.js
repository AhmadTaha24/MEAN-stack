const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const shelvesSchema = new Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: "books", required: true },
        shelve: {
            type: String, enum: ["none", "read", "want to read", "currently reading"],
            default: "none", required: true
        },

    },

)

const ShelvesModel = mongoose.model("shelves", shelvesSchema);

module.exports = ShelvesModel;