const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: '10.0.2.189',
	port: '3306',
	user: 'chan',
	password: 'chan',
	database: 'test',
	connectionLimit: 10
});

module.exports = pool;
