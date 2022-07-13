const postsArr = [
  { name: "Post 1", message: "lorem ipsum" },
  { name: "Post 2", message: "lorem ipsum" },
  { name: "Post 3", message: "lorem ipsum" },
  { name: "Post 4", message: "lorem ipsum" },
  { name: "Post 5", message: "lorem ipsum" },
  { name: "Post 6", message: "lorem ipsum" },
  { name: "Post 7", message: "lorem ipsum" },
  { name: "Post 8", message: "lorem ipsum" },
  { name: "Post 9", message: "lorem ipsum" },
];

const getPostsController = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(postsArr);
};

const postPostsController = (req, res) => {
  const newPost = req.body;
  postsArr.push(newPost);

  res.send(postsArr);
};

module.exports = { getPostsController, postPostsController };
