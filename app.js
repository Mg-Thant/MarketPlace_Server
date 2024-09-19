const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParesr = require("body-parser");
const cors = require("cors");
dotenv.config();

const authRoutes = require("./routes/auth");

const app = express();

app.use(bodyParesr.json());
app.use(cors());

app.use(authRoutes);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.listen(4000);
    console.log("Database connected and server is running on port 4000")
})