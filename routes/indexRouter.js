import { Router } from "express";
import { getIndex } from "../controllers/indexController.js";
import { getForm } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);

indexRouter.get("/new", getForm);

export default indexRouter;
