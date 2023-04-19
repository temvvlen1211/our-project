import app from "./app";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL || "";

mongoose.connect(MONGO_URL);

mongoose.connection.once("open", () => {
  console.log("mongoose connection established");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
