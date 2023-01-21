const { MessageModel } = require("../models/index");

class MessageRepository {
  async getMessagesByUserId(userId) {
    const messages = await MessageModel.findAll({ where: { UserId: userId } });

    return messages.map((message) => message.dataValues);
  }
  async createMessage(message) {
    const newMessage = await MessageModel.create(message);

    return newMessage.dataValues;
  }
}

module.exports = new MessageRepository();
