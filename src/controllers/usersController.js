const userModel = require("../models/userModel");

let usersArr = [
  { name: "Kofi", email: "kofi@email.com", id: 1 },
  { name: "Ama", email: "ama@email.com", id: 2 },
  { name: "Mary", email: "mary@email.com", id: 3 },
];

const getUsersController = async (request, response) => {
  try {
    const users = await userModel.find();
    response.send(users);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (request, response) => {
  const userId = request.query.id;
  const updatedInfo = request.body;

  const updatedUser = await userModel.findByIdAndUpdate(
    userId,
    {
      $set: updatedInfo,
    },
    { new: true }
  );

  response.send(updatedUser);
};

const deleteUser = (request, response) => {
  const userId = request.query.id;

  usersArr = usersArr.filter((user) => {
    return user.id != userId;
  });

  response.send(usersArr);
};

const postUsersController = async (request, response) => {
  try {
    const user = request.body;
    const newUser = new userModel(user);

    await newUser.save();

    response.send(newUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsersController,
  postUsersController,
  updateUser,
  deleteUser,
};
