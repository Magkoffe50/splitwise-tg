import express from 'express';

import axios from 'axios';
import getTgApi from './helpers/getTgApi';

export const getMessage = async (req: express.Request, res: express.Response) => {
  try {
    console.log(req.body);
    const chat_id = req.body.message.chat.id;
    const text = req.body.message.text;
    const { api } = getTgApi();

    await axios.post(`${api}/sendMessage`, { chat_id, text });

    res.send();
  } catch (err) {
    res.send(err);
  }
};
