const express = require("express");
const connectdb = require("../database/mongoose");
const Hotel = require("../routes/Hotel");

connectdb();
const app = express();
const port = process.env.PORT || 1200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/airbnb", Hotel);

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
