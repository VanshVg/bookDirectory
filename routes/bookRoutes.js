const express = require("express");
const bookController = require("../controller/bookController");

const router = express.Router();

router.post("/addBook", bookController.add);
router.get("/showBooks", bookController.show);
router.get("/showBook/:id", bookController.showOne);
router.get("/sortAuthor", bookController.sortAuthor);
router.delete("/removeBook/:id", bookController.remove);
router.put("/updateBook/:id", bookController.update);

module.exports = router;
