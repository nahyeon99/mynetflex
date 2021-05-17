import db from "../db";
import Video from "../models/Video";

export const welcome = (req, res) => {
  res.render("welcome", { pageTitle: "Welcome" });
};
export const home = async (req, res) => {
  const videos = await Video.find({});
  let video;
  if (videos) {
    video = videos[0];
  }
  res.render("home", { pageTitle: "Home", videos, video });
};
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  return res.redirect(routes.home);
};

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};
export const postLogin = (req, res) => {
  return res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.redirect(routes.welcome);
};
export const search = (req, res) => {
  res.render("search", { pageTitle: "search" });
};
export const myList = (req, res) => {
  res.render("myList", { pageTitle: "my list", db });
};
export const tv = (req, res) => {
  res.render("tv", { pageTitle: "TV" });
};
export const movie = (req, res) => {
  res.render("movie", { pageTitle: "MOVIE" });
};
export const contactus = (req, res) => {
  res.render("contactus", { pageTitle: "Contact Us" });
};

export const getChangePassword = (req, res) => {
  return res.render("changePassword", { pageTitle: "Change Password" });
};
export const postChangePassword = (req, res) => {
  return res.redirect(routes.home);
};
