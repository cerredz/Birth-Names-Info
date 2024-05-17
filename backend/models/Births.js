import mongoose from "mongoose";

const birthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const Births = mongoose.model("Birth", birthSchema);
export default Births;
