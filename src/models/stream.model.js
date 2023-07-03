import mongoose from "mongoose";

const stream = new mongoose.Schema({
    episode_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Episode",
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    time: {
        type: String,
        required: true,
    }
});

export const StreamModel = mongoose.model("Stream", stream);
// const data = await Stream.find({}).populate("episode_id");
// const data_two = await Stream.find({}).populate("user_id");
// export default Stream;

// import mongoose from "mongoose";

// const user = new mongoose.Schema({
// 	first_name: { type: String, required: true, index: true },
// 	last_name: { type: String, required: true, index: true },
// 	email: { type: String, },
// 	password: { type: String, },
// });

// export const UserModel = mongoose.model("Course", user);