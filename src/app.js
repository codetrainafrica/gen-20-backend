const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const {
  getUsersController,
  postUsersController,
  updateUser,
  deleteUser,
} = require("./controllers/usersController");

const server = express();
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.get("/users", getUsersController);
server.post("/users", postUsersController);
server.put("/users", updateUser);
server.delete("/users", deleteUser);

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tony:ZZJz1YKhGp2eaODU@cluster0.annapyt.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("DB connected successfully");

    server.listen(3000, () => {
      console.log("server running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

connectToDB();
