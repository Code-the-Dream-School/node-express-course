const { createCustomError, CustomAPIError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  //   console.log(err);
  //   return res.status(err.status).json({ msg: err.message });
  //   return res.status(500).json({ msg: err });
  return res.status(500).json({ msg: "Something went wrong, try again later" });
};

module.exports = errorHandlerMiddleware;
