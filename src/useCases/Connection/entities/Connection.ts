import { v4 } from "uuid";

interface ConnectionInterface {
    id: string;
    user_id: number;
    created_at: Date;
}

export default class Connection {
    id: string;
    user_id: number;
    created_at: Date; //timestamp


    constructor({user_id}: Omit<ConnectionInterface, 'id'|'created_at'>) {
        this.id = v4();
        this.created_at = new Date();
        this.user_id = user_id;
    }

}