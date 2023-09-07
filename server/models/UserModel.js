import mongoose, { Schema } from "mongoose";
import USER_ROLES from "../utils/constants.js";

const UserSchema = new Schema({
	email: {
		type: String,
		unique: true,
		trim: true,
		lowercase: true
	},
	name: String,
	role: {
		type: String,
		trim: true,
		enum: {
			values: Object.values(USER_ROLES),
			message: '{VALUE} is not one of the user roles'
		}
	},
	password: String
});

export default mongoose.model('User', UserSchema);