import mongoose from "mongoose";

const episode = new mongoose.Schema({
    season_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Season"
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: {
        type: String,
        required: true
    },
});

export const EpisodeModel = mongoose.model("Episode", episode);