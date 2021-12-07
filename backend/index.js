const express = require("express");
const cors = require("cors");
const config = require("./config");
require("dotenv").config();
const usersRoute = require("./routes/users");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 8000;

app.use("/api/users", usersRoute);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
