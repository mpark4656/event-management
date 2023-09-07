import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';
import { compare } from '../utils/hash.js';
import { BadRequestError } from '../middleware/errorMiddleware.js';

export const login = async (req, res) => {
	if(!req.body.email || !req.body.password) {
		throw new BadRequestError('Email and password are required');
	}
	const user = await User.findOne({ email: req.body.email.toLowerCase() });
	if(!user) {
		throw new BadRequestError('Incorrect email or password');
	}
	if(!await compare(req.body.password, user.get('password'))) {
		throw new BadRequestError('Incorrect email or password');
	}
	var token = jwt.sign(
		{ userId: user.get('_id') },
		process.env.JWT_SECRET,
		{ expiresIn: process.env.JWT_TOKEN_EXP }
	);
	res.cookie('jwttoken', token, { httpOnly: true, maxAge: process.env.COOKIES_MAX_AGE })
		.status(200)
		.json({ msg: 'Login successful' });
};

export const logout = (req, res) => {
	res.clearCookie('jwttoken').status(202).json({ msg: 'Logout successful' }).end();
}

export const getCurrentUser = async (req, res) => {
	const user = await User.findOne({ _id: req.body.userId });
	res.status(200).json({ user });
}