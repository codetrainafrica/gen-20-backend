const { Schema, model } = require("mongoose");

const postsSchema = new Schema({
  name: String,
  message: String,
});

const PostModel = model("Posts", postsSchema);

module.exports = PostModel;
