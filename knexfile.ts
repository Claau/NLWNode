import path from 'path';

/*
knex by default uses javascript - configure it in pakcage.json
sobrescrever comando knex:migrate , pq vai porcurar por knexile. js em vez de .ts
 */

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,  'src','database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
}