const UserModel = require("./UserModel");
const MessageModel = require("./MessageModel");

UserModel.hasMany(MessageModel);
MessageModel.belongsTo(UserModel);

module.exports = {
  UserModel,
  MessageModel,
};
