const user = require('../models/user');
const asyncHandler = require("../middleware/async");
const errorResponse = require("../utils/errorResponse");

//@Desc register
//@route Get /api/v1/auth/register
//@access Public

exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true
  });
});
