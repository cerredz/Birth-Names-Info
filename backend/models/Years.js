import mongoose from "mongoose";

const nameCountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  count: { type: Number, required: true },
  gender: { type: String, required: true },
});

const yearSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  nameCount: [nameCountSchema],
  total_names: {
    type: Number,
    required: true,
  },
  total_births: {
    type: Number,
    required: true,
  },
});

const Years = mongoose.model("Year", yearSchema);
export default Years;
