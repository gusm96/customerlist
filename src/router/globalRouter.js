import express from "express";
import { getFront, getHome, getUpload, postUpload } from "../controller";

const globalRouter = express.Router();

globalRouter.get("/", getFront);
globalRouter.get("/home", getHome);
globalRouter.route("/upload").get(getUpload).post(postUpload);

export default globalRouter;
