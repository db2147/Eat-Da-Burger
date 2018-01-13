// import { createConnection } from "../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/mysql";

/* 
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require("mysql");

// create mysql connection
var connection; 
  
  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      port: 3306,
      host:'localhost',
      user:'root',
      password:'root',
      database:'burger_db'
  });
};

  connection.connect();
  module.exports = connection;