const express = require("express");
const {
  getBanks,
  addBank,
  updateBank,
  deleteBank,
} = require("./controllers/banksController");
const getPosts = require("./controllers/postsController");

const server = express();

server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.get("/banks", getBanks);
server.post("/banks", addBank);
server.put("/banks", updateBank);
server.delete("/banks", deleteBank);

server.get("/posts", getPosts);

server.listen(3000, () => {
  console.log("server running on port 3000");
});
