import express from "express";
import { getEdit, getList } from "../controller";

const listRouter = express.Router();

listRouter.get("/:id([0-9a-f]{24})", getList);
listRouter.get("/:id([0-9a-f]{24})/edit", getEdit);

export default listRouter;
