import { IConnectionsRepository } from "../respositories/IConnectionRepository";

export default class ListNumberOfConnections {
    private connectionsRepository: IConnectionsRepository;

    constructor(connectionsRepository: IConnectionsRepository) {
        this.connectionsRepository = connectionsRepository;
    };

    public async execute(): Promise<string | number> {
        const num_connections = await this.connectionsRepository.count();
        return num_connections;
    };
};