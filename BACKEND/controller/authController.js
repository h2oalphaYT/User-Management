const User = require("../model/userModel");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
  const { FirstName, LastName, Email, Password, MobileNumber } = req.body;

  const hashedPassword = bcryptjs.hashSync(Password, 10);

  const newUser = new User({
    FirstName,
    LastName,
    Email,
    MobileNumber,
    Password: hashedPassword,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

// const signin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const validUser = await User.findOne({ email });
//     if (!validUser) return next(errorHandler(404, "User not found"));
//     const validPassword = bcryptjs.compareSync(password, validUser.Password);
//     if (!validPassword) return next(errorHandler(401, "wrong credentials"));
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     const { password: hashedPassword, ...rest } = validUser._doc;
//     const expiryDate = new Date(Date.now() + 3600000); // 1 hour
//     res
//       .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
//       .status(200)
//       .json(rest);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  signup,

  
};
