import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import listRouter from "./router/listRouter";

const app = express();
const morganMiddleware = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morganMiddleware);
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/list", listRouter);

export default app;
