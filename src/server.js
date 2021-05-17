import express, { json, urlencoded } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morgan("dev"));
app.use(helmet());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cookieParser());

app.use(localsMiddleware);

app.use(routes.welcome, globalRouter);
app.use(routes.videos, videoRouter);

export default app;
