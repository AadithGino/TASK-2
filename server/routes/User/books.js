const express = require("express");
const router = express.Router();
const book = require("../../controller/bookContoller")

// add book
router.route("/add-book").post(book.addBook)

//get books
router.route("/get-books").get(book.getBooks)

//graph
router.route("/graph").get(book.getGraph)


module.exports = router;
