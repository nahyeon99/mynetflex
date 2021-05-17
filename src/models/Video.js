import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number, required: true, default: 2021 },
  rating: { type: Number, required: true, default: 0 },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
