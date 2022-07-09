//Without Express
// const http = require("http");

// const server = http.createServer((request, response) => {
//   response.setHeader("Content-Type", "text/html");
//   if (request.url == "/") {
//     response.write("<h3>Home page</h3>");
//     response.end();
//   } else if (request.url == "/about") {
//     response.write("<h1>About page</h1>");
//     response.end();
//   } else if (request.url == "/member") {
//     response.write("<h1>Member page</h1>");
//     response.end();
//   } else {
//     response.write("<h1>Page not found</h1>");
//     response.end();
//   }
// });

// server.listen(3000, () => {
//   console.log("server running on port 3000");
// });

//With Express
const express = require("express");

const server = express();

const handleHomeRequest = (request, response) => {
  response.send("<h3>Home page</h3>");
};

const handleAboutRequest = (request, response) => {
  response.send("<h3>About page</h3>");
};

const handleMemberRequest = (request, response) => {
  response.send("<h3>Member page</h3>");
};

server.use("/about", handleAboutRequest);
server.use("/member", handleMemberRequest);
server.use("/", handleHomeRequest);

server.listen(3000, () => {
  console.log("server running on port 3000");
});
