import { Router } from "express";
import { getIndexRouter } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getIndexRouter);

export default indexRouter;
