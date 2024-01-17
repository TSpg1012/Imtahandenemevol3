const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/router");
const cors = require("cors");

require("dotenv").config();
require("./config/db");

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
