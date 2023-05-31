const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema(
    {
        categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
        authorId: { type: mongoose.Schema.Types.ObjectId, ref: "authors" },
        title: { type: String, required: true },
        imageUrl: { type: String },
    }
)

const BooksModel = mongoose.model("books", booksSchema);

 
module.exports = BooksModel;