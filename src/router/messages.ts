import express from 'express';
import { getMessage } from '../controller/messages';

export default (router: express.Router) => {
  router.post('', getMessage);
};
