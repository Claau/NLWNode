import { Request, Response } from 'express';
import ConnectionsRepository from '@useCases/Connection/respositories/ConnectionRepository';
import CreateConnectionService from '@useCases/Connection/services/CreateConnectionService';
import ListNumberOfConnections from '@useCases/Connection/services/ListConnectionsService';

const connectionsRepository = new ConnectionsRepository();

export default class ConnnectionsController {
    async index(req: Request, res: Response) {

        const getNumberOfConnections = new ListNumberOfConnections(
            connectionsRepository
        );
        
        const num_connections = await getNumberOfConnections.execute();
        return res.json({total: num_connections});
    };

    async create(req: Request, res: Response) {
        const { user_id } = req.body;

        const createConnection = new CreateConnectionService(
            connectionsRepository
        );
        try {
            const parsed_user_id = Number(user_id);
            const connection = await createConnection.execute(parsed_user_id);
    
            return res.sendStatus(201);        

        } catch(err) {
            return res.json({
                error: err.message
            })
        }

       
    };
}