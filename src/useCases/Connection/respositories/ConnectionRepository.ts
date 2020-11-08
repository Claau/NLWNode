import Connection from '../entities/Connection';
import db from '@database/connection';
import { IConnectionsRepository } from './IConnectionRepository';
import { QueryBuilder } from 'knex';


class ConnectionRepository implements IConnectionsRepository {

    constructor() {}

    public async create(user_id: number): Promise<QueryBuilder> {
        const connection_onj = new Connection({user_id})
        const connection = await db("connections").insert({
            user_id
        });
        return connection;
    };

    public async count(): Promise<string | number> {
        const connections = await db('connections').count('* as total');
        const { total } = connections[0];
        return total;
    };
};

export default ConnectionRepository;