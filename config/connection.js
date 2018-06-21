
//connect to our MySQL database
require("dotenv").config();
var keys = require("./../key");
var mysql = require("mysql");

var host_name = keys.host.host_name;
var port_number = keys.host.port_number;
var root_user = keys.host.root_user;
var database_password = keys.database.password;
var database_name = keys.database.name;


var connection = mysql.createConnection({
  host: host_name,
  port: port_number,
  user: root_user,
  password: database_password,
  database: database_name
});



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;