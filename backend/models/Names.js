import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
});

const Name = mongoose.model("Name", nameSchema);
export default Name;
