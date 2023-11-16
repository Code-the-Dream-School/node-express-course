const StatusError = require("../errors/error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof StatusError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res.status(500).json({ msg: "A server error occurred", err });
};

module.exports = errorHandler;
