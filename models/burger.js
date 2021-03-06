var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (result) {
            cb(result);
            // console.log(result)
        })
    },
    create: function (burger, devoured, cb) {
        orm.insertOne("burgers", burger, devoured, cb, function (result) {
            cb(result);
        })
    },
    update: function (devoured, id, cb) {
        orm.updateOne("burgers", devoured, id, cb)
    },
    delete: function (id, cb) {
        orm.deleteOne("burgers", id, cb)
    }
}

module.exports = burger;

