import { QueryBuilder } from "knex";
import User from "../entities/User";

export interface CreateUserDTO {
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
};

export default interface IUserRepository {
    create(data: CreateUserDTO): Promise<QueryBuilder>;
};
