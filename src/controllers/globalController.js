import db from "../db";

export const welcome = (req, res) => {
  res.render("welcome", { pageTitle: "Welcome" });
};
export const home = (req, res) => {
  const video = db[0];
  res.render("home", { pageTitle: "Home", db, video });
};
export const join = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const login = (req, res) => {
  res.render("login", { pageTitle: "Login" });
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
export const changePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};
