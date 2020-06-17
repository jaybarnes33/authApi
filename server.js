const express = require ("express");
const dotenv = require ("dotenv");

const app = express ();

app.listen(5000 || process.env.PORT, ()  => {
  console.log("Server running on port 5000");
});
