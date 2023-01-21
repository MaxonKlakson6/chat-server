const { MessageRepository, UserRepository } = require("../repositories/index");
const ApiError = require("../error/ApiError");
const checkMessage = require("../helpers/checkMessage");
const {
  SUCCESS_MESSAGES,
  REJECT_MESSAGES,
} = require("../constants/responseMessages");
class MessageController {
  async sendMessage(req, res, next) {
    const { body } = req;
    const errorMessage = checkMessage(body);

    if (errorMessage) {
      return next(ApiError.badRequest(errorMessage));
    }

    const sender = await UserRepository.findById(body.senderId);
    const message = {
      senderName: sender.name,
      UserId: body.recipientId,
      text: body.text,
      theme: body.theme,
    };

    const newMessage = await MessageRepository.createMessage(message);

    res.status(200).json(SUCCESS_MESSAGES.SEND_MESSAGE);
  }

  async getMessages(req, res, next) {
    if (!req.query.id) {
      return next(ApiError.badRequest(REJECT_MESSAGES.GET_MESSAGES));
    }

    const messages = await MessageRepository.getMessagesByUserId(req.query.id);
    res.status(200).json(messages);
  }
}

module.exports = new MessageController();
