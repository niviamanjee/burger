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
        var queryString = `INSERT INTO ${tableInput} SET ${[{ burger_name: burger, devoured: devoured }]} `;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            console.log(res)
            cb(res)
        })

    },
    updateOne: function (tableInput, burger, devoured, id, cb) {
        var queryString = `UPDATE ${tableInput} SET ${[{ burger_name: burger, devoured: devoured }]} WHERE id = ${id} `;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res)
        })
    }
}

module.exports = orm;
