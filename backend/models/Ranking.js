import mongoose from "mongoose";

const rankingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
});

const Rankings = mongoose.model("Ranking", rankingSchema);
export default Rankings;
