import { Router } from 'express';
import classesRouter from './Classes/routes';
import connectionsRouter from './Connections/routes';

const routes = Router();

routes.use('/classes', classesRouter);
routes.use('/connections', connectionsRouter);

export default routes;