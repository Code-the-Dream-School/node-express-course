class CustomAPIError extends Error {
	constructor(message, statusCode) {
		supper(message)
		this.statusCode = statusCode
	}
}

const createCustomError = (mes, statusCode) => {
	return new CustomAPIError(mes, statusCode)
}

module.exports = { createCustomError, CustomAPIError }
