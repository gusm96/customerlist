import express from "express";
import {
  getFront,
  getHome,
  getUpload,
  postUpload,
  getLogin,
  postLogin,
  getJoin,
  postJoin,
  logout,
} from "../controller";

const globalRouter = express.Router();

globalRouter.get("/", getFront);
globalRouter.get("/home", getHome);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.get("/logout", logout);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/upload").get(getUpload).post(postUpload);

export default globalRouter;
