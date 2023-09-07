/**
 * Authenticate or authorize user.
 * Make current user's id avaiable in req.body.userId
 */
import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';
import { UnauthenticatedError, UnauthorizedError } from './errorMiddleware.js';

const findUserFromJWTToken = async (token) => {
	if(!token) throw new UnauthenticatedError('unauthenticated');
	const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
	if(!decodedToken) throw new UnauthenticatedError('unauthenticated');
	const user = await User.findOne({ _id: decodedToken.userId });
	if(!user) throw new UnauthenticatedError('unauthenticated');
	return user;
};

// Make sure it's a currently logged in user
export const authenticate = async (req, res, next) => {
	const user = await findUserFromJWTToken(req.cookies.jwttoken);
	req.body.userId = user.get('_id');
	next();
};

// Make sure it's a currently logged in user with a specific role
export const authorize = (roles) => {
	return async (req, res, next) => {
		const user = await findUserFromJWTToken(req.cookies.jwttoken);
		req.body.userId = user.get('_id');
		if(!roles.includes(user.get('role'))) throw new UnauthorizedError('unauthorized');
		next();
	};
};