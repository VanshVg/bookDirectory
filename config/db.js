const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/bookDirectory";

module.exports = mongoose.connect(url);
