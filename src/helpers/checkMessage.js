const { REJECT_MESSAGES } = require("../constants/responseMessages");

module.exports = function (message) {
  const { senderId, recipientId, text } = message;

  if (!senderId || !recipientId) {
    return REJECT_MESSAGES.SEND_MESSAGE_WITHOUT_ID;
  }

  if (!text) {
    return REJECT_MESSAGES.SEND_MESSAGE_EMPTY_TEXT;
  }
};
