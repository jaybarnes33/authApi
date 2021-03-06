const User = require('../models/User');
const asyncHandler = require("../middleware/async");
const errorResponse = require("../utils/errorResponse");

//@Desc register
//@route Get /api/v1/auth/register
//@access Public

exports.register = asyncHandler(async (req, res, next) => {
const { name,email,password,role } = req.body;

const user =  await User.create({
  name,
  email,
  password,
  role
});
res.status(200).json({success:true});
});
