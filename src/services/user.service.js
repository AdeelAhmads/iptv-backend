import { UserModel } from "../models/index.js";
import jwt from "jsonwebtoken";
import passwordHash from 'password-hash';
export const UserService = {
	getAll: async () => {
		return UserModel.find();
	},

	get: async (id) => {

		const users = await UserModel.find()

		console.log(users);
		for (const user of users) {

			if (user.id === id) {
				return await UserModel.findById(id);
			}
			
		}

	},

	add: async (body) => {
		let data;
		data = await UserModel.find({ email: body.email });
		// Secret key used to sign the token
		if (data.length == 0) {
			const data = UserModel.create(body);
			const token = jwt.sign(body, secretKey);
			const hashedPassword = passwordHash.generate(body.password);
			delete body.password;
			body.password = hashedPassword;

			// console.log(body);

			console.log(data);

			data.token = token;
			console.log('data');
			return data;
		}
		else {
			return "This user is already available";
		}


	},

	delete: async (id) => {
		// console.log('deleted request');
		// console.log(req);
		const users = await UserModel.find()

		// console.log(users);
		for (const user of users) {

			if (user.id === id) {
				return await UserModel.findByIdAndDelete(id);
			}

		}

	},
	update: async (id, body) => {

		const users = await UserModel.find()

		console.log(users);
		for (const user of users) {

			if (user.id === id) {
				const user = await UserModel.findById(id);

				console.log(user);
				if (user) {
					if (body.first_name) {
						user.first_name = body.first_name;
					}
					if (body.last_name) {
						user.last_name = body.last_name;
					}
					if (body.password) {
						user.password = body.password;
					}
					if (body.email) {
						user.email = body.email;
					}
					await user.save();
					return user;

				}



			}

		}



	}

};
