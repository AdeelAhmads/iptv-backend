import mongoose from "mongoose";

const series = new mongoose.Schema({
    genre_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre"
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    trailer: { type: String, required: true }
});

export const SeriesModel = mongoose.model("Series", series);