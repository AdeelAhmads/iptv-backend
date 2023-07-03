import { SeasonModel } from "../models/index.js";
import jwt from "jsonwebtoken";
import passwordHash from 'password-hash';
export const SeasonService = {
    getAll: async () => {
        return SeasonModel.find();
    },

    get: async (id) => {

        const seasons = await SeasonModel.find()

        console.log(seasons);
        for (const season of seasons) {

            if (season.id === id) {
                return await SeasonModel.findById(id);
            }
         
        }

    },

    add: async (body) => {
        let data;
        data = await SeasonModel.find({ name: body.name });
        // Secret key used to sign the token
        if (data.length == 0) {
            const data = SeasonModel.create(body);
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
            return "This season is already available"
        }


    },

    delete: async (id) => {
        // console.log('deleted request');
        // console.log(req);
        const seasons = await SeasonModel.find()

        // console.log(users);
        for (const season of seasons) {

            if (season.id === id) {
                return await SeasonModel.findByIdAndDelete(id);
            }

        }

    },
    update: async (id, body) => {

        const seasons = await SeasonModel.find()

        console.log(seasons);
        for (const season of seasons) {

            if (season.id === id) {
                const season = await SeasonModel.findById(id);

                console.log(season);
                if (season) {
                    if (body.name) {
                        season.name = body.name;
                    }
                    if (body.description) {
                        season.description = body.description;
                    }


                    await season.save();
                    return season;

                }



            } 

        }



    }

};
