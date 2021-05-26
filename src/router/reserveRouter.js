import express from "express";
import {
  getReserve,
  getReserved,
  postReserve,
  getEditReserver,
  postEditReserver,
  getDeleteReserver,
} from "../controller";

const reserverRouter = express.Router();

reserverRouter.get("/", getReserved);
reserverRouter.route("/reserve").get(getReserve).post(postReserve);
reserverRouter
  .route("/:id([0-9a-f]{24})")
  .get(getEditReserver)
  .post(postEditReserver);
reserverRouter.get("/:id([0-9a-f]{24})/delete", getDeleteReserver);

export default reserverRouter;
