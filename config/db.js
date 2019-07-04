const mysql = require('mysql')

const connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "mdsMySql"
})

console.log("Connected to database 'mdsMySql' !")

module.exports = connection
