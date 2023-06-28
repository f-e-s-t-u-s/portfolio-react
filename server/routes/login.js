const express = require("express");
const login = express.Router();
const bcrypt = require("bcrypt")
const Author = require("../schema/AuthorSchema");

login.post("/api/create", async (req, res) => {
  const userPresent = await Author.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }],
  });
  //check if user is in database both username and email
  if (userPresent) return res.json({ error: "User already exists" });

  const hashedPass = await bcrypt.hash(req.body.password, 10);
  const values = {
    username: req.body.username,
    email: req.body.email,
    passwordHash: hashedPass,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  const create_new_user = await Author.create(values);
  //check if user is created
  if (!create_new_user) return res.json({ error: "Failed to add user" });

  res.json({
    logged: true,
    status: 200,
  });

  console.log(req.body);
});

const register = express.Router();
register.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await Author.findOne({ email: email });

  //check if user exists
  if (!user) {
    return res.json({
      error: "User does not exist",
      status: 400,
      logged: false,
    });
  }
  //check correct password
  const validPass = await bcrypt.compare(password, user.passwordHash);

  if (!validPass) {
    return res.json({
      error: "Invalid login Deatails",
      status: 400,
      logged: false,
    });
  }
  res.json({ status: 200, logged: true });

  console.log(req.body);
});

module.exports = {login, register};
