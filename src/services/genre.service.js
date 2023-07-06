import { GenreModel} from "../models/index.js";
import jwt from "jsonwebtoken";
import passwordHash from 'password-hash';
import mongoose from "mongoose";
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
    getSeries:async (id)=>{

        const data = await GenreModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(id),
				},
			},
			{
				$lookup: {
					from: "series",
					localField: "_id",
					foreignField: "genre_id",
					as: "series_record",
				},
			},
		]);
		return data;
    },
    getSeasons:async(id)=>{
        const data = await GenreModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(id),
				},
			},
			{
				$lookup: {
					from: "series",
					localField: "_id",
					foreignField: "genre_id",
					as: "series",
				},
			},
              {
                $lookup: {
                  from: "seasons", // Collection name for seasons
                  localField: "season._id",
                  foreignField: "series.series_id",
                  as: "seasons"
                }
              },
              {
                $project: {
                  _id: 0,
                  seasons: 1
                }
              }
            
		]);
		return data;
    },
    add: async (body) => {
        let data;
        data = await GenreModel.find({ name: body.name });
        
        if (data.length == 0) {
            const data = GenreModel.create(body);
            // const token = jwt.sign(body, secretKey);
            console.log('data');
            return data;
        }
        else{
            return "This genre is already available"
        }


    },

    delete: async (id) => {
        const genres = await GenreModel.find()
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
