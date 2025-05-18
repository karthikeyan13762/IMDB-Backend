const express = require("express");

require("dotenv").config();

const port = process.env.Port;

const app = express();

app.listen(port, () => {
  console.log("connected at port no " + port);
});
