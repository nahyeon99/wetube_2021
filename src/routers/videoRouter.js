import express from "express";
import {
  watch,
  postEditVideo,
  getEditVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEditVideo).post(postEditVideo);

export default videoRouter;
