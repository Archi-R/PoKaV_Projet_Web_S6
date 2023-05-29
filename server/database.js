const mariadb = require('mariadb');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'PoKaV'
};

exports.createConnection = function() {
    return mariadb.createConnection(config);
}