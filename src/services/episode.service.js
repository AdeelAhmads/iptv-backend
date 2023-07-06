import { EpisodeModel } from "../models/index.js";
import jwt from "jsonwebtoken";
import passwordHash from 'password-hash';
import mongoose from "mongoose";
export const EpisodeService = {
    getAll: async () => {
        return EpisodeModel.find();
    },

    get: async (id) => {

        const episodes = await EpisodeModel.find()

        console.log(episodes);
        for (const episode of episodes) {

            if (episode.id === id) {
                return await EpisodeModel.findById(id);
            }
           
        }

    },
    getStream:async (id)=>{
        const data = await EpisodeModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(id),
				},
			},
			{
				$lookup: {
					from: "streams",
					localField: "_id",
					foreignField: "episode_id",
					as: "streams_record",
				},
			},
		]);
		return data;
    },

    add: async (body) => {
        let data;
        data = await EpisodeModel.find({ name: body.name });
        // Secret key used to sign the token
        if (data.length == 0) {
            const data = EpisodeModel.create(body);
            // const token = jwt.sign(body, secretKey);
            // const hashedPassword = passwordHash.generate(body.password);
            // delete body.password;
            // body.password = hashedPassword;


            // console.log(data);

            // data.token = token;
            // console.log('data');
            return data;
        }
        else {
            return "This episode is already available"
        }


    },

    delete: async (id) => {
        // console.log('deleted request');
        // console.log(req);
        const episodes = await EpisodeModel.find()

        // console.log(users);
        for (const episode of episodes) {

            if (episode.id === id) {
                return await EpisodeModel.findByIdAndDelete(id);
            }

        }

    },
    update: async (id, body) => {

        const episodes = await EpisodeModel.find()

        console.log(episodes);

        for (const episode of episodes) {

            if (episode.id === id) {
                const episode = await EpisodeModel.findById(id);

                console.log(episode);

                if (episode) {
                    if (body.name) {

                        episode.name = body.name;
                    }
                    if(body.description) {
                        episode.description = body.description;
                    }
                    if(body.image){
                        episode.image= body.image;
                    }
                

                    await episode.save();
                    return episode;

                }



            }


        }



    }

};
