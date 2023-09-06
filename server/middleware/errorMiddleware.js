
const errorMiddleware = (err, req, res, next) => {
	console.log(err);
	res.status(500).json({msg: 'internal server error'});
};

export default errorMiddleware;