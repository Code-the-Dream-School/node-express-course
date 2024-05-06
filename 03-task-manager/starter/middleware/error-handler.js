const { CustomAPIError } = require('../error/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
	if (err instanceof CustomAPIError) {
		return res.status(err.statusCode).json({ message: err.message })
	}
	return res
		.status(500)
		.json({ message: 'Something went wrong, try again later!' })
}

module.exports = errorHandlerMiddleware
