const { Router } = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = new Router();

messageRouter.post("/", messageController.sendMessage);
messageRouter.get("/", messageController.getMessages);
messageRouter.get("/unread", messageController.getUnreadMessages);
messageRouter.patch("/", messageController.updatedUnreadMessages);

module.exports = messageRouter;
