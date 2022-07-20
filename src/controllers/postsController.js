const postModel = require("../models/postModel");

const getPostsController = async (req, res) => {
  try {
    const posts = await postModel.find({ name: "Post 10" });
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
};

const postPostsController = async (req, res) => {
  try {
    const newPost = req.body;

    const post = new postModel(newPost);
    await post.save();

    res.send(post);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPostsController, postPostsController };
