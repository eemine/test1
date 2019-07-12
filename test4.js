const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

const users = [1, 2, 3, 4];
const addUser = (name, surname, age) =>
  users.push({
    name,
    surname,
    age
  });
const getAllUsers = () => users;

app.get("/users", function(req, res) {
  const allUsers = getAllUsers();

  res.send(allUsers);
});

app.listen(3000);
