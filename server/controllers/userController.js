import User from "../models/UserModel.js";

export const getUser = async (req, res) => {
	const user = await User.findOne({ _id: req.params.id });
	res.status(200).json({ user });
};

export const getAllUsers = async (req, res) => {
	const users = await User.find();
	res.status(200).json({ users });
};

export const createUser = async (req, res) => {
	const user = await User.create(req.body);
	res.status(201).json({ user });
};

export const updateUser = async (req, res) => {
	const user = await User.findOneAndUpdate(
		{ _id: req.params.id },
		req.body,
		{ new: true }
	);
	res.status(200).json({ user });
};

export const deleteUser = async (req, res) => {
	const user = await User.findOneAndDelete({ _id: req.params.id });
	res.status(200).json({ user });
};
