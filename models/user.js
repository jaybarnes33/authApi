const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/authapiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"]

  },
  email: {
    type: String,
    required: [true, "Please enter an email"]
  },
  password: {
    type: String,
    required: [true, "Please enter a Password"],
    minlength: 8,
    select: false
  },
  role: {
    type: String,
    required: true,
    enum: 'user'
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);
