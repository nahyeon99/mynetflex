import db from "../db";

export const videoDetail = (req, res) => {
  const {
    params: { id },
  } = req;
  res.render("videoDetail", { pageTitle: `${video.title}` });
};

export const videoPlay = (req, res) => {
  res.send("videoPlay");
};
