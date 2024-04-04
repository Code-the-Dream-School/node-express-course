class CustomALIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
const createCustomError = (message, statusCode) => {
  return new CustomALIError(message, statusCode);
};
module.exports = { createCustomError, CustomALIError };
