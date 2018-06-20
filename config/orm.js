// MySQL connection
var connection = require("../config/connection.js");


var orm = {
    // selecting all burgers from table.
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM" + table + ";";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    // inserting a new burger to table.
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table;

        queryString += " (" + cols.toString() + ") ";
        queryString += "VALUES (" + vals + ") ";

        connection.query(queryString, vals, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    // update a burger in the table.
    updateOne: function(table, colVal, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET " + colVal;
        queryString += " WHERE " + condition;

        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
};



// Export orm object
module.exports = orm;