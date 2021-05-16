import express from "express";
import routes from "../routes";
import { videoDetail, videoPlay } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.videoPlay, videoPlay);

export default videoRouter;
