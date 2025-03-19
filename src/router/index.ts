import express from 'express';

import users from './users';
import messages from './messages';

const router = express.Router();

export default (): express.Router => {
  messages(router);
  return router;
};
