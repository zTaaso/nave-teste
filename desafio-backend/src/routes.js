import express from 'express';
import NaverController from './app/controllers/NaverController';
import ProjectController from './app/controllers/ProjectController';

const routes = express.Router();

routes.get('/navers', NaverController.index);
routes.get('/naver/:id', NaverController.show);
routes.post('/naver', NaverController.store);

routes.get('/projects', ProjectController.index);
routes.get('/project/:id', ProjectController.show);
routes.post('/project', ProjectController.store);

export default routes;
