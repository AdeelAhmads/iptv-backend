import { SeriesModel } from "../models/index.js";
import jwt from "jsonwebtoken";
import passwordHash from 'password-hash';
export const SeriesService = {
    getAll: async () => {
        return SeriesModel.find();
    },

    get: async (id) => {

        const seriess = await SeriesModel.find()

        console.log(seriess);
        for (const series of seriess) {

            if (series.id === id) {
                return await SeriesModel.findById(id);
            }
           
        }

    },

    add: async (body) => {
        let data;
        data = await SeriesModel.find({ name: body.name });
        // Secret key used to sign the token
        if (data.length == 0) {
            const data = SeriesModel.create(body);
            // const token = jwt.sign(body, secretKey);
            // const hashedPassword = passwordHash.generate(body.password);
            // delete body.password;
            // body.password = hashedPassword;


            // console.log(data);

            // data.token = token;
            console.log('data');
            return data;
        }
        else {
            return "This series is already available"
        }


    },

    delete: async (id) => {
        // console.log('deleted request');
        // console.log(req);
        const seriess = await SeriesModel.find()

        // console.log(users);
        for (const series of seriess) {

            if (series.id === id) {
                return await SeriesModel.findByIdAndDelete(id);
            }
        }

    },
    update: async (id, body) => {

        const seriess = await SeriesModel.find()

        console.log(seriess);
        for (const series of seriess) {

            if (series.id === id) {
                const series = await SeriesModel.findById(id);

                console.log(series);
                if (series) {
                    if (body.name) {
                        series.name = body.name;
                    }
                    if(body.description) {
                        series.description = body.description;
                    }
                    if(body.trailer){
                        series.trailer = body.trailer;
                    }


                    await series.save();
                    return series;

                }



            } else {
                return "Invalid series id";
            }


        }



    }

};
