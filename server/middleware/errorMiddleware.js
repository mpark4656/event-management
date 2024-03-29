class CustomError extends Error {
	constructor(message) {
		super(message);
		this.message = message;
	}
};

export class BadRequestError extends CustomError {
	constructor(message) {
		super(message);
		this.statusCode = 400;
	}
};

export class UnauthenticatedError extends CustomError {
	constructor(message) {
		super(message);
		this.statusCode = 401;
	}
};

export class UnauthorizedError extends CustomError {
	constructor(message) {
		super(message);
		this.statusCode = 403;
	}
};

export class NotFoundError extends CustomError {
	constructor(message) {
		super(message);
		this.statusCode = 404;
	}
};

const errorMiddleware = (err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || 'Internal server error';
	console.log(err);
	res.status(statusCode).json({ msg: message });
};

export default errorMiddleware;