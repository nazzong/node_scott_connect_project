const mysql = require("mysql2/promise");


const pool = mysql.createPool({
    host : "15.165.74.110",
    port : 3306,
    user : "dev_env",
    password : "fourleaf0309!!",
    database : "scott",
    connectionLimit : 10,
});


module.exports = pool;


