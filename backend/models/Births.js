import mongoose from "mongoose";

const birthSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Year: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Count: {
    type: Number,
    required: true,
  },
});

const Births = mongoose.model("Birth", birthSchema);
export default Births;
