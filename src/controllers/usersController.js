let usersArr = [
  { name: "Kofi", email: "kofi@email.com" },
  { name: "Ama", email: "ama@email.com" },
  { name: "Mary", email: "mary@email.com" },
];

const getUsersController = (request, response) => {
  response.send(usersArr);
};

const postUsersController = (request, response) => {
  const user = request.body;
  usersArr.push(user);

  response.send(usersArr);
};

module.exports = { getUsersController, postUsersController };
