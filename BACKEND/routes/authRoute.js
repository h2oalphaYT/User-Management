const express = require("express");
const router = express.Router();
const authController = require("../controller/authController")

router.route("/signup").post(authController.signup)
router.route("/signin").post(authController.signin)


module.exports = router;