import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/Connectionscontroller';


const routes = express.Router()

const classesController = new ClassesController();
const connectiomsController = new ConnectionsController();

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.post('/connections', connectiomsController.create);
routes.get('/connections', connectiomsController.index);

export default routes;