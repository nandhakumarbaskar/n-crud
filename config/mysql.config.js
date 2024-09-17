const mysql = require("mysql2")
const pool = mysql.createPool({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'nani'
})

pool.getConnection((error)=>{
console.log("error:", error)
})

module.exports = pool.promise()