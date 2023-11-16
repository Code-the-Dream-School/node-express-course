class StatusError extends Error {
  constructor(message, resultCode) {
    super(message);
    this.statusCode = resultCode;
  }
}

module.exports = StatusError;
