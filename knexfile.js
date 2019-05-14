
const path = require('path');
module.exports = {
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'api',
        user: 'admin',
        password: 'admin'
    },

    migrations: {
        tableName: 'migrations',
        directory: path.resolve(__dirname, './migrations'),
    },
    userNullAsDefault: true

};/*  */