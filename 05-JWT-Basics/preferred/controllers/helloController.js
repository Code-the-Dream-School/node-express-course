const jwt = require('jsonwebtoken');

const logon = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ message: 'Missing name or password' });
  }

  try {
    const token = await jwt.sign({ name }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME});
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const hello = async (req, res) => {
  res.status(200).json({ message: `Hello, ${req.user.name}!` });
}

module.exports = { logon, hello };