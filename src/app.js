const express = require("express");
const mongoose = require("mongoose");
const {
  getPostsController,
  postPostsController,
} = require("./controllers/postsController");

const server = express();

server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.get("/posts", getPostsController);
server.post("/posts", postPostsController);

mongoose
  .connect(
    "mongodb+srv://tony:Yy8OADb2xQ5PVlwT@posts.83hy6vq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    server.listen(3000, () => {
      console.log("server running on port 3000");
    });
  })
  .catch((e) => {
    console.log(e);
  });
