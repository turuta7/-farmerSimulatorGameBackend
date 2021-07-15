import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import createError from "http-errors";

import { achievements } from "./router/index.js";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(cookieParser());

app.use(achievements);

app.use("/", (req, res) => {
  res.send({ message: "Error endpoint!" });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
