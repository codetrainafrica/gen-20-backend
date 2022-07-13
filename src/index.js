const express = require("express");
const path = require("path");

const server = express();

server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(express.static(path.join(__dirname, "../public")));

// server.get("/about", (req, res) => {
//   res.send("this is a get req");
// });

server.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send({ email, password });
});

server.listen(3000, () => console.log("server running on port 3000"));
// const handleHomeRequest = (request, response) => {
//   const homePath = path.join(__dirname, "../public/index.html");
//   response.sendFile(homePath);
// };

// const handleProfileRequest = (request, response) => {
//   response.send("<h1>Profile page</h1>");
// };

// const handleAboutRequest = (request, response) => {
//   response.send("<h1>About page</h1>");
// };

// server.use("/about", handleAboutRequest);
// server.use("/profile", handleProfileRequest);
// server.use("/", handleHomeRequest);
