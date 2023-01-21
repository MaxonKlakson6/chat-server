const { Router } = require("express");
const UserController = require("../controllers/userController");

const userRouter = new Router();

userRouter.post("/signIn", UserController.signIn);
userRouter.get("/", UserController.getAllUsers);

module.exports = userRouter;
