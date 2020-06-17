const express = require("express");
const dotenv = require("dotenv");

// routes
const auth = require("./routes/auth");

const app = express();




app.use("/api/v1/auth", auth);

app.listen(5000 || process.env.PORT, () => {
  console.log("Server running on port 5000");
});
