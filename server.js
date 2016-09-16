// server.js
// Friend Finder App

// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Router - require route files
// Send the express node TO the files via the name app
// you do this instead of putting var express at the top of the other files
// =============================================================
require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
