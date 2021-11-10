import mongoose from "mongoose";
import pkg from "mongoose";
const { Schema } = pkg;
const inputSchema = new Schema(
  {
    user: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Input = mongoose.model("Input", inputSchema);

export default Input;
