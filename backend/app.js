const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user"); //import routes

//app
const app = express();

//db
mongoose.connect(process.env.DATABASE).then(() => {
  console.log("Connected to database!");
});

//routes middleware
app.use("/api", userRoutes);
/////////////////////////////////////////
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
