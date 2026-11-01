import { Router } from "express";
import { getIndex } from "../controllers/indexController.js";
import { getForm } from "../controllers/indexController.js";
import { postForm } from "../controllers/indexController.js";
import { getMessageById } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/new", getForm);
indexRouter.post("/new", postForm);
indexRouter.get("/messages/:messageId", getMessageById);

export default indexRouter;
