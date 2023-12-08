const mysql = require('mysql2/promise');

const connectionPool = mysql.createPool({
<<<<<<< HEAD
    uri: process.env.DB_URI || 'mysql://root:password@localhost:3306/blue_horizon'
})


module.exports = { connectionPool }; 
=======
    uri: process.env.DB_URI || 'mysql://root:password@localhost:3306/Blue_Horizon'
})


module.exports = {connectionPool}; 
>>>>>>> e173d24a2cf352366a0a9fa47907eaa1ed32ba8f
