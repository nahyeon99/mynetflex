import db from "../db";

export const videoDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  const video = db[id];
  res.render("videoDetail", { pageTitle: `${video.title}`, video });
};

export const videoPlay = (req, res) => {
  res.send("videoPlay");
};
