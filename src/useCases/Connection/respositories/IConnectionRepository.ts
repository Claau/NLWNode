import { QueryBuilder } from 'knex';

export interface IConnectionsRepository {
    create(user_id: number): Promise<QueryBuilder> ;
    count(): Promise<string | number>;
};