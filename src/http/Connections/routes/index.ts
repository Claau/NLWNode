import { Router } from 'express';
import ConnectionsController from '../controllers/ConnectionsController';

const connectionsController = new ConnectionsController();

const connectionsRouter = Router();
connectionsRouter.get('/', connectionsController.index);
connectionsRouter.post('/', connectionsController.create);

export default connectionsRouter;
