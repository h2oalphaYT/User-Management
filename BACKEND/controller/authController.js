const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const errorHandler = require("../utils/error");
var jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  const { FirstName, LastName, Email, Password, MobileNumber } = req.body;

  try {
    // Generate a salt
    const saltRounds = 15;
    const salt = bcrypt.genSaltSync(saltRounds);

    // Hash the password
    const hashedPassword = bcrypt.hashSync(Password, salt);

    // Create a new user
    const newUser = new User({
      FirstName,
      LastName,
      Email,
      MobileNumber,
      Password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
};

const signin = async (req, res, next) => {
  const { Email, Password } = req.body;
  try {
    const validUser = await User.findOne({ Email });
    if (!validUser) return next(errorHandler(404, "User not found"));

    const validPassword = bcrypt.compareSync(Password, validUser.Password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  signin,
};
