const pgp = require("pg-promise")();
const db = pgp({
    user:'postgres',
    password:'root',
    host: 'localhost',
    port:5432
});

module.exports = db;