const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  body: {
    type: String,
    required: true,
  }
});

const Post = mongoose.model("posts", schema);

module.exports = Post;
