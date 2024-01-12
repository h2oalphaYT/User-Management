const express = require("express")
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");


const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Success! 🚀");
});

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);
const authRoutes = require("./routes/authRoute");
app.use("/api/auth", authRoutes);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})


app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});

