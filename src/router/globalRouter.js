import express from "express";
import { getHome, getUpload, postUpload } from "../controller";

const globalRouter = express.Router();

globalRouter.get("/", getHome);
globalRouter.route("/upload").get(getUpload).post(postUpload);

export default globalRouter;
