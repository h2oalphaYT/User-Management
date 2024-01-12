const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
    },
    LastName: {
      type: String,
    },
    Email: {
      type: String,
    },
    Password: {
      type: String,
    },
    MobileNumber: {
      type: String,
    },
    profilePicture: {
      type: String,
      default:
        'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
