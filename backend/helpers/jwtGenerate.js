const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerate({ username, email }) {
  let token = jwt.sign({ username, email }, process.env.SECRETKEY, {
    expiresIn: "1h",
  });
  return token;
}

module.exports = jwtGenerate;
