const express = require("express");
const userController = require("../controller/userController")
const router = express.Router();
const verifyToken = require("../utils/verifyUser")

router.route("/update/:id").post(verifyToken,userController.updateUser)
router.route("/delete/:id").delete(verifyToken,userController.deleteUser)

module.exports = router;
 