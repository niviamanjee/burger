var exphbs = require("express-handlebars");
var express = require("express");


var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public/assets"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




app.get("/", function (req, res) {
    connection.query("SELECT * FROM burgers;", function (err, data) {
        if (err) {
            return res.status(500).end();
        }

        res.render("index", { burgers: data });
    });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
