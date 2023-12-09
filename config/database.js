const mysql = require('mysql2/promise');

const connectionPool = mysql.createPool({

    uri: process.env.DB_URI || 'mysql://root:password@localhost:3306/blue_horizon'
})


module.exports = { connectionPool }; 