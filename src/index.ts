require('dotenv').config();
// console.log(process.env.MONGO_URL);

import { DEFAULT_PORT } from './constants';

import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import getTgApi from './controller/helpers/getTgApi';
import router from './router';
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json());
// app.use(cookieParser());

app.use((req: Request, res: Response, next: NextFunction) => {
  next();
});

// mongoose.Promise = Promise;
// mongoose.connect(process.env.MONGO_URL);
// mongoose.connection.on("error", (error: Error) => console.log(error));

const { api, uri, webhookUrl } = getTgApi();

const init = async () => {
  try {
    const res = await axios.get(`${api}/setWebhook?url=${webhookUrl}`);
    console.log(res.data);

    await axios.post(`${api}/setMyCommands`, {
      commands: [
        {
          command: 'start',
          description: 'Start using bot',
        },
        {
          command: 'help',
          description: 'Display help',
        },
        {
          command: 'menu',
          description: 'Display menu',
        },
      ],
      language_code: 'en',
    });
  } catch (error) {
    console.log(error);
  }
};

app.use(uri, router());

app.listen(process.env.PORT || DEFAULT_PORT, async () => {
  console.log(`Server started on port = ${process.env.PORT || DEFAULT_PORT}`);

  await init();
});
