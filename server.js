import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import inputRoutes from "./routes/inputRoutes.js";
dotenv.config();

const server = express();

server.use(express.json());

server.use("/api/input", inputRoutes);

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      console.log("Err", err);
    } else {
      console.log("Connection Successful");
      server.listen(4000, () => console.log("Server started!"));
    }
  }
);
