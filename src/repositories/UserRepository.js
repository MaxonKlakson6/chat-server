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
    return UserModel.findOne({ where: { name } });
  }
}

module.exports = new UserRepository();
