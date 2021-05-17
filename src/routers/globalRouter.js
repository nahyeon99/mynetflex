import express from "express";
import routes from "../routes";
import {
  contactus,
  getChangePassword,
  getJoin,
  getLogin,
  home,
  logout,
  movie,
  myList,
  postChangePassword,
  postJoin,
  postLogin,
  search,
  tv,
  welcome,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.welcome, welcome);
globalRouter.get(routes.home, home);

globalRouter.route(routes.join).get(getJoin).post(postJoin);
globalRouter.route(routes.login).get(getLogin).post(postLogin);
globalRouter.get(routes.logout, logout);
globalRouter
  .route(routes.changePassword)
  .get(getChangePassword)
  .post(postChangePassword);

globalRouter.get(routes.search, search);
globalRouter.get(routes.myList, myList);
globalRouter.get(routes.tv, tv);
globalRouter.get(routes.movie, movie);
globalRouter.get(routes.contactus, contactus);

export default globalRouter;
