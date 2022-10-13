const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const imageUpload = require("express-fileupload");

const tourRoutePackage = require("./routes/tourPackage");
const tourRoute = require("./routes/tour");

//conect db
dotenv.config();
mongoose.connect(process.env.MONGODB_LOCAL_URL, () => {
  console.log("connected to Mongodb");
});

//config
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));
app.use(imageUpload());

//routes
app.use("/tour-package", tourRoutePackage);
app.use("/tour", tourRoute);

//start server
app.listen(process.env.PORT, () => {
  console.log("server is running...");
});
