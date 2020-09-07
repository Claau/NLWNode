"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
/*
knex by default uses javascript - configure it in pakcage.json
sobrescrever comando knex:migrate , pq vai porcurar por knexile. js em vez de .ts
 */
module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path_1.default.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
};
