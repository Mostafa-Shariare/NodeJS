let users = require("../model/models");
const { v4: uuidv4 } = require("uuid");

//get users
const getAllUser = (req, res) => {
  res.status(200).json(users);
};

//create users
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  users.push(newUser);

  res.status(200).json(users);

  // res.status(200).json({ meeeage: "User created successfully" });
};

//update user
const updateUser = (req, res) => {
  const userid = req.params.userid; // match this with route
  const { name, email, role } = req.body;

  const selectedUser = users.find((user) => user.id === userid);

  if (!selectedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  // Update properties (note: should be username, not name)
  selectedUser.name = name || selectedUser.username;
  selectedUser.email = email || selectedUser.email;
  selectedUser.role = role || selectedUser.role;

  res.status(200).json({
    message: "User updated successfully",
    updatedUser: selectedUser,
  });
};

//delete user
const deleteUser = (req, res) => {
  const userid = req.params.userid; // match this with route
  users = users.filter((user) => user.id !== userid);

  res.status(200).json(users);
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
