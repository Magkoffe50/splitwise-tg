require('dotenv').config();
// console.log(process.env.MONGO_URL);

import { DEFAULT_PORT } from './constants';

import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
// import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import mongoose from "mongoose";
// import router from "./router";

const app = express();
// app.use(bodyParser.json());
// app.use(cookieParser());

// app.use((req: Request, res: Response, next: NextFunction) => {
//   next();
// });

// mongoose.Promise = Promise;
// mongoose.connect(process.env.MONGO_URL);
// mongoose.connection.on("error", (error: Error) => console.log(error));

// app.use("/api", router());

app.listen(process.env.PORT || DEFAULT_PORT, () => {
  console.log(`Server started on port = ${process.env.PORT || DEFAULT_PORT}`);
});
