// Global Router

const WELCOME = "/";
const HOME = "/home";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const MY_LIST = "/my-list";
const GENRE_TV = "/tv";
const GENRE_MOVIE = "/movie";
const CONTACTUS = "/contactus";
const CHANGEPASSWORD = "/change-password";

// Video Router

const VIDEOS = "/videos";
const VIDEO_DETAIL = "/:id(\\d+)";
const VIDEO_PLAY = "/play/:id(\\d+)";

const routes = {
  welcome: WELCOME,
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  myList: MY_LIST,
  tv: GENRE_TV,
  movie: GENRE_MOVIE,
  contactus: CONTACTUS,
  changePassword: CHANGEPASSWORD,
  videos: VIDEOS,
  videoDetail: VIDEO_DETAIL,
  videoPlay: VIDEO_PLAY,
};

export default routes;
