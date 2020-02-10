var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    console.log("get route")
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
});

router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, req.body.devoured, function (result) {
        res.json({ id: result.insertId });
    })
})
router.put("/api/burgers/:id", function (req, res) {
    console.log("PUT:", req.params)
    burger.update("true", req.params.id, function (result) {
        res.json({ id: result.insertId });
    })
})

router.delete("/api/burgers/:id", function (req, res) {
    burger.delete(req.params.id, function (result) {
        res.json({ id: result.insertId })
    })
})
module.exports = router;