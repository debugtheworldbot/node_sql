var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
});

connection.connect();

// CREATE TABLE IF NOT EXISTS user CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci
connection.query('CREATE DATABASE IF NOT EXISTS mydbs DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});
connection.query('use mydbs')
connection.query('CREATE TABLE IF NOT EXISTS user', function (error, results, fields) {
    if (error) throw error;
    fields: {
        name: "2"
    }
    console.log('The solution is: ', results);
});

connection.end();