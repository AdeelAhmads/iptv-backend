import { GenreModel} from "../models/index.js";
import jwt from "jsonwebtoken";
import passwordHash from 'password-hash';
export const GenreService = {
    getAll: async () => {
        return GenreModel.find();
    },

    get: async (id) => {

        const genres = await GenreModel.find()

        console.log(genres);
        for (const genre of genres) {

            if (genre.id === id) {
                return await GenreModel.findById(id);
            }
         
        }

    },

    add: async (body) => {
        let data;
        data = await GenreModel.find({ name: body.name });
        // Secret key used to sign the token
        if (data.length == 0) {
            const data = GenreModel.create(body);
            // const token = jwt.sign(body, secretKey);
            // const hashedPassword = passwordHash.generate(body.password);
            // delete body.password;
            // body.password = hashedPassword;


            // console.log(data);

            // data.token = token;
            console.log('data');
            return data;
        }
        else{
            return "This genre is already available"
        }


    },

    delete: async (id) => {
        // console.log('deleted request');
        // console.log(req);
        const genres = await GenreModel.find()

        // console.log(users);
        for (const genre of genres) {

            if (genre.id === id) {
                return await GenreModel.findByIdAndDelete(id);
            }
          
        }

    },
    update: async (id, body) => {

        const genres = await GenreModel.find()

        console.log(genres);
        for (const genre of genres) {

            if (genre.id === id) {
                const genre = await GenreModel.findById(id);

                console.log(genre);
                if (genre) {
                    if (body.name) {
                        genre.name = body.name;
                    }

                    await genre.save();
                    return genre;

                }



            } 

        }



    }

};
