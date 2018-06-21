// MySQL connection
// var connection = require("../config/connection.js");
var connection = require('../config/connection');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }



// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


var orm = {
    // selecting all burgers from table.
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    // inserting a new burger to table.
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table;

        queryString += " (" + cols.toString() + ") ";
        queryString += "VALUES (" + printQuestionMarks(vals.length) + ") ";

        connection.query(queryString, vals, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    // update a burger in the table.
    updateOne: function(table, colVal, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET " + objToSql(colVal);
        queryString += " WHERE " + condition;

        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
};



// Export orm object
module.exports = orm;