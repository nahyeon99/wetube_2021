import express from "express";
import morgan from "morgan";
import { localsMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
