const jwt = require("jsonwebtoken");
const StatusError = require("../errors/error");

const logon = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    throw new StatusError("You need to provide name and password", 400);
  }
  const id = new Date().getDate();
  const token = jwt.sign({ name, id }, process.env.JWT_SECRET, {
    expiresIn: "24h"
  });
  res.status(200).json({ token });
};

const hello = async (req, res) => {
  res.status(200).json({ msg: `Hello, ${req.user.name}` });
};

module.exports = { logon, hello };
