import db from "@database/connection";
import { QueryBuilder } from "knex";
import User from "../entities/User"
import { CreateUserDTO } from "./IUserRepository";


export default class UserRepository {

    constructor() {}

    async create({name, avatar, whatsapp, bio}: CreateUserDTO): Promise<QueryBuilder> {
        const user = new User({
            name,
            avatar,
            whatsapp,
            bio
        });
        const users = await db('users').insert({
            name,
            avatar,
            whatsapp,
            bio
        });
        return users;
    };
}