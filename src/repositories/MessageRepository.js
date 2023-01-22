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

  async getUnreadMessages(id) {
    const unreadMessages = await MessageModel.findAll({
      where: { UserId: id, isRead: false },
    });

    return unreadMessages.map((message) => message.dataValues);
  }

  async updateUnreadMessages(userId) {
    const updatedMessages = await MessageModel.update(
      { isRead: true },
      {
        where: { UserId: userId, isRead: false },
      }
    );
  }
}

module.exports = new MessageRepository();
