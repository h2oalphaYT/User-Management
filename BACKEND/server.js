const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = process.env.PORT || 8001;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; 

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Success! 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
