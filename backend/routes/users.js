const express = require("express");

const router = express.Router();

const { signup, loginuser } = require("../controllers/userController");
const {
  getUsers,
  updatePassword,
  deleteUser,
} = require("../controllers/userOperations");

router.post("/registration", signup);
router.post("/login", loginuser);
router.post("/getUsers", getUsers);
router.post("/updatePassword", updatePassword);
router.post("/deleteUser", deleteUser);
module.exports = router;
