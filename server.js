const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

require("dotenv/config");

const app = express();

dotenv.config();

// Connect Database
connectDB();

app.get("/", (req, res) => res.send("API Running"));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server up and running on port ${PORT}`)
);
