const express = require("express");
const connectdb = require("../database/mongoose");
const Hotel = require("../routes/Hotel");
const User = require("../routes/User");
const cors = require("cors");

connectdb();
const app = express();
const port = process.env.PORT || 1200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/airbnb", Hotel);
app.use("/api/airbnb", User);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
