const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// routes

const auth = require("./routes/auth");

const app = express();
//bodyParser
app.use(express.json());
//mounts
app.use("/api/v1/auth", auth);
mongoose.connect("mongodb://localhost:27017/authapiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});




app.listen(5000 || process.env.PORT, () => {
  console.log("Server running on port 5000");
});
