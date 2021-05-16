import express from "express";
import routes from "../routes";
import {
  contactus,
  home,
  login,
  logout,
  movie,
  myList,
  search,
  tv,
  welcome,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.welcome, welcome);
globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);
globalRouter.get(routes.myList, myList);
globalRouter.get(routes.tv, tv);
globalRouter.get(routes.movie, movie);
globalRouter.get(routes.contactus, contactus);

export default globalRouter;
