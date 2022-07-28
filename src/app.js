const express = require("express");
const mongoose = require("mongoose");
const {
  getBanks,
  addBank,
  updateBank,
  deleteBank,
  getSingleBank,
} = require("./controllers/banksController");
const getPosts = require("./controllers/postsController");

const server = express();

server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.get("/banks/:id", getSingleBank);
server.get("/banks", getBanks);
server.post("/banks", addBank);
server.put("/banks", updateBank);
server.delete("/banks", deleteBank);

server.get("/posts", getPosts);

const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tony:RB5faCAyu5V5BAb6@samplecluster.ejwiywv.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("database connected successfully!");

    server.listen(3000, () => {
      console.log("server running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

connectToDb();
