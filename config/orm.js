var connection = require("./connection.js");



var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ";
        connection.query(queryString + tableInput, function (err, result) {
            if (err) throw (err)
            cb(result);
        })

    },
    insertOne: function (tableInput, burger, devoured, cb) {
        var queryString = `INSERT INTO ${tableInput} SET burger_name = ?, devoured = ? `;
        connection.query(queryString, [burger, devoured], function (err, res) {
            if (err) throw err;
            // console.log(res)
            cb(res)
        })

    },
    updateOne: function (tableInput, devoured, id, cb) {
        var queryString = `UPDATE ${tableInput} SET devoured = ${devoured} WHERE id = ${id} `;
        console.log(queryString)
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res)
        })
    },
    deleteOne: function (tableInput, id, cb) {
        var queryString = `DELETE FROM ${tableInput} WHERE  id = ${id}`;
        console.log(queryString)
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res)
        })
    }
}

module.exports = orm;
