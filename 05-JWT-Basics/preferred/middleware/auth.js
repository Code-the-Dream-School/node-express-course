const jwt = require("jsonwebtoken");
const StatusError = require("../errors/error");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new StatusError("unauthorized", 401);
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { name: decoded.name };
    next();
  } catch (error) {
    throw new StatusError("unauthorized", 401);
  }
};

module.exports = authMiddleware;
