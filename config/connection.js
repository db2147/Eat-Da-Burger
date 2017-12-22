var mysql = require("mysql");

// create mysql connection
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'burger_db'
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // export the node/mysql connection
  module.exports = connection;