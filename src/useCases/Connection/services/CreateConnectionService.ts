import { QueryBuilder } from 'knex';
import Connection from '../entities/Connection'
import { IConnectionsRepository } from '../respositories/IConnectionRepository';


export default class CreateConnectionService {
    private connectionsRepository: IConnectionsRepository;

    constructor(connectionsRepository: IConnectionsRepository) {
        this.connectionsRepository =  connectionsRepository;
    }

    public async execute(user_id: number): Promise<QueryBuilder> {

        const connection =  await this.connectionsRepository.create(
            user_id);

        return connection;
    };
}