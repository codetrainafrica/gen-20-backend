//WITHOUT EXPRESS

// const http = require("http");

// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.write("<h2>Home page</h2>");
//     response.end();
//   } else if (request.url === "/profile") {
//     response.write("<h1>Profile</h1>");
//     response.end();
//   } else if (request.url === "/about") {
//     response.write("<h1>About</h1>");
//     response.end();
//   } else {
//     response.write("Page not found");
//     response.end();
//   }
// });

// server.listen(3000, () => console.log("server running on port 3000"));

//WITH EXPRESS

const express = require("express");

const server = express();

const handleHomeRequest = (request, response) => {
  response.send("<h1>Home page</h1>");
};

const handleProfileRequest = (request, response) => {
  response.send("<h1>Profile page</h1>");
};

const handleAboutRequest = (request, response) => {
  response.send("<h1>About page</h1>");
};

server.use("/about", handleAboutRequest);
server.use("/profile", handleProfileRequest);
server.use("/", handleHomeRequest);

server.listen(3000, () => console.log("server running on port 3000"));
