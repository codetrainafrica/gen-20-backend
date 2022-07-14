const express = require("express");
const path = require("path");

const server = express();
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.get("/login", (request, response) => {
  response.sendFile(path.join(__dirname, "../public/login.html"));
});

server.post("/login", (request, response) => {
  response.send(
    `Your email is ${request.body.email} and your password is ${request.body.password}`
  );
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
