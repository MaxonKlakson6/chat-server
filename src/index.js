const express = require("express");
const cors = require("cors");
require("dotenv").config();

const router = require("./routes/index");
const database = require("./database/db");
const models = require("./models/index");
const errorHandler = require("./middleware/errorHandling");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startApplication = async () => {
  try {
    await database.authenticate();
    await database.sync();

    app.listen(PORT, () => {
      console.log("server running on port " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

startApplication();
