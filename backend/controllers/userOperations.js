const connection = require("../config");
const encryptPassword = require("../helpers/Encrypt");

const getUsers = async (req, res) => {
  let { recordset } = await connection.execute("getallusers");
  res.send(recordset[0]);
};

const updatePassword = async (req, res) => {
  try {
    let { firstname, lastname, email, password } = req.body;

    let { recordset } = await connection.execute("getuser", { email });
    if (
      firstname !== recordset[0].firstname ||
      lastname !== recordset[0].lastname ||
      email !== recordset[0].email
    )
      return res.status(400).send("Wrong inputs");

    let pass = await encryptPassword(password);

    await connection.execute("updatepassword", {
      email: email,
      password: pass,
    });
    res.send("user updated");
  } catch (error) {
    res.status(202).send("Error occurred");
  }
};

const deleteUser = async (req, res) => {
  let { email, password } = req.body;
  let { recordset } = await connection.execute("getuser", { email });

  if (email !== recordset[0].email) return res.send("oops! wrong email");
  await connection.execute("deleteuser", { email });
  res.status(201).send("user successfully deleted");
};
module.exports = { getUsers, updatePassword, deleteUser };
