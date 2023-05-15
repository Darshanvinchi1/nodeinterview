const mysql = require('mysql');

const connection =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Darshan@70',
    database: "nodeinterview"
})

connection.connect((err) => {
    if (err) console.log(err);
    console.log('mysql connected');
});

module.exports = connection;