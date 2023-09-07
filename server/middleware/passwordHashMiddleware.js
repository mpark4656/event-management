import { hash } from '../utils/hash.js';

const passwordHashMiddleware = async (req, res, next) => {
	if(req.body.password) req.body.password = await hash(req.body.password);
	next();
};

export default passwordHashMiddleware;