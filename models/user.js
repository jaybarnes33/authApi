const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})

module.exports = mongoose.model("User", userSchema);
