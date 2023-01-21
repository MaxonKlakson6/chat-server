const { UserModel } = require("../models/index");

class UserRepository {
  async createUser(name) {
    const newUser = await UserModel.create({
      name,
    });

    return newUser.dataValues;
  }

  async findAll() {
    return UserModel.findAll();
  }
  async findById(id) {
    return UserModel.findOne({ where: { id } });
  }
  async findByName(name) {
    const user = await UserModel.findOne({ where: name });

    return user.dataValues;
  }
}

module.exports = new UserRepository();
