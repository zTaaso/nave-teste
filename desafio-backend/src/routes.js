import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'vsf men' });
});

export default routes;
