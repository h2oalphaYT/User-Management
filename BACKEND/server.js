const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend/UserManagement/dist")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend", "UserManagement", "dist", "index.html")
  );
});

const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connection Success! 🚀");
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });

app.use(express.json());
app.use(cookieParser());

const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);
const authRoutes = require("./routes/authRoute");
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
