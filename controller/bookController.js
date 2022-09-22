const bookModel = require("../model/bookModel");

const add = async (req, resp) => {
  let data = new bookModel({
    title: req.body.title,
    isbn: req.body.isbn,
    pagecount: req.body.pagecount,
    author: req.body.author,
  });
  const book = await bookModel.findOne({ isbn: req.body.isbn });
  console.log(book);
  if (book) {
    resp.status(400).send({
      message: "Book already exists",
    });
    console.log("Book already exists");
  } else {
    let result = await data.save();
    resp.status(200).send({ result });
    console.log({ result });
  }
};

const show = async (req, resp) => {
  let data = await bookModel.find();
  resp.status(200).send({ data });
  console.log({ data });
};

const showOne = async (req, resp) => {
  const { id } = req.params;
  let book = await bookModel.findOne({ isbn: id });
  if (book) {
    resp.status(200).send({ book });
    console.log({ book });
  } else {
    resp.status(404).send({
      message: "Book doesn't exist",
    });
    console.log("Book doesn't exist");
  }
};
const remove = async (req, resp) => {
  const { id } = req.params;
  let deleteBook = bookModel.find({ isbn: id });
  if (!deleteBook) {
    resp.status(404).send({
      message: "This book doesn't exist",
    });
    console.log("This book doesn't exist");
  } else {
    let data = await bookModel.deleteOne(deleteBook);
    resp.status(200).send({
      message: "Book successfully removed",
    });
    console.log("Book successfully removed");
  }
};

const update = async (req, resp) => {
  const { id } = req.params;
  let book = await bookModel.findOne({ isbn: id });
  if (!book) {
    resp.status(404).send({
      message: "Book doesn't exist",
    });
  } else {
    let data = await bookModel.updateOne({ isbn: id }, { $set: req.body });
    resp.status(200).send({
      message: "Book updated",
    });
    console.log("Book updated");
  }
};

const sortAuthor = async (req, resp) => {
  let data = await bookModel.find({ author: req.body.author });
  resp.status(200).send({ data });
  console.log({ data });
};

module.exports = { add, show, showOne, remove, update, sortAuthor };
