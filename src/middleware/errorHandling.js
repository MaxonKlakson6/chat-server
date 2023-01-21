const ApiError = require("../error/ApiError");
const { REJECT_MESSAGES } = require("../constants/responseMessages");

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json(err.message);
  }

  return res.status(500).json(REJECT_MESSAGES.UNEXPECTED_ERROR);
};
