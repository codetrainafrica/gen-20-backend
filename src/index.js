const express = require("express");
const path = require("path");

const server = express();

server.use(express.static(path.join(__dirname, "../public")));

// const handleHomeRequest = (request, response) => {
//   const homePath = path.join(__dirname, "../public/index.html");
//   response.sendFile(homePath);
// };

// const handleAboutRequest = (request, response) => {
//   const aboutPath = path.join(__dirname, "../public/about.html");
//   response.sendFile(aboutPath);
// };

// const handleServicesRequest = (request, response) => {
//   const servicesPath = path.join(__dirname, "../public/services.html");
//   response.sendFile(servicesPath);
// };

// server.use("/services", handleServicesRequest);
// server.use("/about", handleAboutRequest);
// server.use("/", handleHomeRequest);

server.listen(3000, () => {
  console.log("server running on port 3000");
});
