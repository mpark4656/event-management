import bcrypt from 'bcrypt';

export const hash = async (plainTextPassword, saltSize = 10) => {
	const salt = await bcrypt.genSalt(saltSize);
	return await bcrypt.hash(plainTextPassword, salt);
};

export const compare = async (plainTextPassword, hashedPassword) => {
	return await bcrypt.compare(plainTextPassword, hashedPassword);
}