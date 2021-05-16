import express from "express";
import { videoDetail, videoPlay } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", videoDetail);
videoRouter.get("/play/:id(\\d+)", videoPlay);

export default videoRouter;
