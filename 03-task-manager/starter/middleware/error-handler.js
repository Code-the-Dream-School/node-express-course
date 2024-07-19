const { CustomAPIError } = require(`../errors/custom-error`);

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res
      .status(err.statusCode)
      .json({ msg: `SOMETHING WENT WRONG: ${err.message}` });
  }
  return res.status(500).json({ msg: `SOMETHING WENT WRONG: ${err}` });
};

module.exports = errorHandlerMiddleware;
