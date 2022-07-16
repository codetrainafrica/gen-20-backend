const express = require("express");
const path = require("path");
const {
  getUsersController,
  postUsersController,
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

// server.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/login.html"));
// });

// server.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   res.send({
//     response: "Login successful",
//     email,
//   });
// });

server.listen(3000, () => {
  console.log("server running on port 3000");
});
