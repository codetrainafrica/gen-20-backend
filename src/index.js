const express = require("express");
const path = require("path");

const server = express();
server.use(express.static(path.join(__dirname, "../public")));

server.listen(3000, () => {
  console.log("server running on port 3000");
});

// const handleHomeRequest = (request, response) => {
//   const homePath = path.join(__dirname, "../public/index.html");
//   response.sendFile(homePath);
// };

// const handleAboutRequest = (request, response) => {
//   const aboutPath = path.join(__dirname, "../public/about.html");
//   response.sendFile(aboutPath);
// };

// const handleServicesRequest = (request, response) => {
//   response.sendFile(path.join(__dirname, "../public/services.html"));
// };

// server.use("/about", handleAboutRequest);
// server.use("/services", handleServicesRequest);
// server.use("/", handleHomeRequest);
