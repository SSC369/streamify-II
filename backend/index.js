const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const moviesRoutes = require("./routes/movies");
const reviewRoutes = require("./routes/reviews");
require("dotenv").config({ path: "./.env" });
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
app.get("/", (req, res) => {
  res.send("API is working");
});
app.use("/api/auth", authRoutes);
app.use("/api/saved", moviesRoutes);
app.use("/api/review", reviewRoutes);

const mongoUri = process.env.MONGODB_CONNECTION_LINK;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to mongo Successful");
  } catch (error) {
    console.log(error.message);
  }
};

connectToMongo();
