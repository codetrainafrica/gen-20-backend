//Without Express
// const http = require("http");

// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.write("<h2>Home page</h2>");
//     response.end();
//   } else if (request.url === "/services") {
//     response.write("<h1>Services page</h1>");
//     response.end();
//   } else if (request.url === "/about") {
//     response.write("<h1>About page</h1>");
//     response.end();
//   } else {
//     response.write("<h1>404 Not Found!</h1>");
//     response.end();
//   }
// });

// server.listen(3000, () => {
//   console.log("server running on port 3000");
// });

//With express
const express = require("express");

const server = express();

const handleHomeRequest = (request, response) => {
  response.send("<h1>Home page</h1>");
};

const handleAboutRequest = (request, response) => {
  response.send("<h2>About page</h2>");
};

const handleServicesRequest = (request, response) => {
  response.send("<h1>Services page</h1>");
};

server.use("/services", handleServicesRequest);
server.use("/about", handleAboutRequest);
server.use("/", handleHomeRequest);
server.use("*", (request, response) => {
  response.send("<h1>404 Not Found</h1>");
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
