const mariadb = require('mariadb');

const config = {
    host: 'localhost',
    user: 'username',
    password: 'root',
    database: 'PoKaV'
};

exports.createConnection = function() {
    return mariadb.createConnection(config);
}