import express from "express";
import { getEdit, getList, postEdit, getDelete } from "../controller";

const listRouter = express.Router();

listRouter.get("/:id([0-9a-f]{24})", getList);
listRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
listRouter.get("/:id([0-9a-f]{24})/delete", getDelete);

export default listRouter;
