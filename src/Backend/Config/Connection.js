var mysql = require('mysql2');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Addweb@123",
    database: "Bookmyshow"
});

module.exports = db;