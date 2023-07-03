import { StreamModel } from "../models/index.js";
import jwt from "jsonwebtoken";
import passwordHash from 'password-hash';
export const StreamService = {
    getAll: async () => {
        return StreamModel.find();
    },

    get: async (id) => {

        const streams = await StreamModel.find()
        // console.log(streams);
    //    console.log("body id:"+id);
        // console.log(streams);
        for (const stream of streams) {
            console.log(stream);
        //    console.log(`stream.id: ${stream.id}`);

            if (stream.id === id) {

                return await StreamModel.findById(id);
            }
        }

    },

    add: async (body) => {
        // let data;
        // data = await StreamModel.find({ time: body.name });
        // Secret key used to sign the token
        // if (data.length == 0) {
            const data = StreamModel.create(body);
            // const token = jwt.sign(body, secretKey);
            // const hashedPassword = passwordHash.generate(body.password);
            // delete body.password;
            // body.password = hashedPassword;


            // console.log(data);

            // data.token = token;
            // console.log('data');
            return data;
        // }
        // else {
        //     return "This stream is already available"
        // }


    },

    delete: async (id) => {
        // console.log('deleted request');
        // console.log(req);
        const streams = await StreamModel.find()

        // console.log(users);
        for (const stream of streams) {

            if (stream.id === id) {
                return await StreamModel.findByIdAndDelete(id);
            }
        }

    },
    update: async (id, body) => {

        const streams = await StreamModel.find()

        console.log(streams);
        for (const stream of streams) {

            if (stream.id === id) {
                console.log(body.time);
                
                const timeStream = await StreamModel.findById(id);

                if (timeStream) {

                    if (body.time) {
                        timeStream.time = body.time;
                    }
                   

                    await timeStream.save();
                    return timeStream;

                }
            } 


        }



    }

};
