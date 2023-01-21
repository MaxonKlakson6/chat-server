const SUCCESS_MESSAGES = {
  SEND_MESSAGE: "Message sent successfully",
};

const REJECT_MESSAGES = {
  GET_MESSAGES: "Can't find messages without your id. Try to sign up again",
  SEND_MESSAGE_EMPTY_TEXT: "Can't send empty message",
  SEND_MESSAGE_WITHOUT_ID: "Can't send messages without your or recipient id",
  CREATE_ACCOUNT_WITHOUT_NAME: "Name is required",
  UNEXPECTED_ERROR: "Unexpected error",
};

module.exports = {
  SUCCESS_MESSAGES,
  REJECT_MESSAGES,
};
