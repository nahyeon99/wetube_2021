import express from "express";
import { join, login } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/login", login);
globalRouter.get("/join", join);

export default globalRouter;
