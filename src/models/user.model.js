// import mongoose from "mongoose";
// const schema = mongoose.Schema(
// 	{
// 		name: { type: String, required: true, maxlength: 50 },
// 	},
// 	{ timestamps: true }
// );
// export const UserModel = mongoose.model("User", schema);

import mongoose from "mongoose";

const user = new mongoose.Schema({
	first_name: { type: String, required: true, index: true },
	last_name: { type: String, required: true, index: true },
	email: { type: String, unique: true },
	password: { type: String, },
});

export const UserModel = mongoose.model("User", user);

// export default User;