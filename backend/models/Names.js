import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Names = mongoose.model("Name", nameSchema);
export default Names;
