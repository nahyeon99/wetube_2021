import express from "express";
import {
  watch,
  postEditVideo,
  getEditVideo,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEditVideo).post(postEditVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
