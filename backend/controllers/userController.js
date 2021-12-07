const connection = require("../config");
const lodash = require("lodash");
require("dotenv").config();
const signUpValidation = require("../helpers/SignupValidate");
const encryptPassword = require("../helpers/Encrypt");
const jwtGenerate = require("../helpers/jwtGenerate");
const bcrypt = require("bcryptjs");

const loginuser = async (req, res) => {
  try {
    //get user details
    let { email, password } = req.body;
    let { recordset } = await connection.execute("getuser", { email });
    //check if user exists
    if (recordset.length === 0)
      return res.send({ message: "Email does not exist" });
    let loginguserpassword = recordset[0].password;
    //check password
    let auth = await bcrypt.compare(password, loginguserpassword);
    if (auth !== true) return res.send({ message: "Incorrect password" });
    //generate token
    const token = jwtGenerate({ email, loginguserpassword });
    if (!token)
      return res.send({
        message: "...Encountered some problem trying to generate a token",
      });
    res.send({
      user: lodash.pick(recordset[0], [
        "firstname",
        "lastname",
        "email",
        "isAdmin",
      ]),
      token,
    });
  } catch (error) {
    res.send(error.message);
  }
};

const signup = async (req, res) => {
  try {
    let { firstname, lastname, email, password, confirmpassword } = req.body;
    //validate user input
    if (password !== confirmpassword)
      return res.status(400).send({ message: "passwords are not same" });
    const { error } = signUpValidation({
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    });

    //catch any error from validation
    if (error) {
      return res.status(400).send(error.message);
    }
    let { recordset } = await connection.execute("getuser", { email });
    //check if user exists

    if (recordset.length !== 0)
      return res.status(400).send({ message: "Email already exists" });
    let pass = await encryptPassword(password);
    //register user
    await connection.execute("registeruser", {
      firstname,
      lastname,
      email,
      pass,
    });
    res.status(201).send({ message: "user registered" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, loginuser };
