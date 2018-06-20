// =================================================================================================================
// DEPENDENCIES
// =================================================================================================================


// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//PORT
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static files
app.use(express.static("public"));

// parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Route import
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Server Listener
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});