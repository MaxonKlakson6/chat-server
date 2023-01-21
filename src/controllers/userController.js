const { UserRepository } = require("../repositories/index");
const ApiError = require("../error/ApiError");
const { REJECT_MESSAGES } = require("../constants/responseMessages");

class UserController {
  async signIn(req, res, next) {
    const { body } = req;
    const name = body.name;

    if (!name) {
      return next(
        ApiError.badRequest(REJECT_MESSAGES.CREATE_ACCOUNT_WITHOUT_NAME)
      );
    }

    const candidate = await UserRepository.findByName(name);

    if (candidate) {
      return res.status(200).json(candidate.dataValues);
    }

    const newUser = await UserRepository.createUser(name);

    res.status(200).json(newUser);
  }
  async getAllUsers(req, res) {
    const users = await UserRepository.findAll();

    res.status(200).json(users);
  }
}

module.exports = new UserController();
