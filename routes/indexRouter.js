import { Router } from "express";
import { userController } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", userController.getIndex);
indexRouter.get("/new", userController.getForm);
indexRouter.post("/new", userController.postForm);
indexRouter.get("/messages/:messageId", userController.getMessageById);

export default indexRouter;
