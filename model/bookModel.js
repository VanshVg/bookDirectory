const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  isbn: Number,
  pagecount: Number,
  author: String,
});

module.exports = mongoose.model("books", bookSchema);
