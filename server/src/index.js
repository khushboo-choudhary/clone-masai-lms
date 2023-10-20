const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connect = require("./configs/db");
const app = express();
app.use(express.json());
app.use(cors());

const assignment = require("./controllers/assignments.controllers");
const lecture = require("./controllers/lecture.controllers");
const user = require("./controllers/user.controllers");
const { register, login } = require("./controllers/auth.controllers");

app.use("/assignment", assignment);
app.use("/lecture", lecture);

app.post("/register", register);
app.use("/findUser", user);
app.post("/login", login);

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  try {
    await connect();
    console.log("listening on", port);
  } catch (err) {
    console.log(err.message);
  }
});
