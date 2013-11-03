/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

var express  = require('express');
var app = express();

app.configure('development', function(){
	// any configurations for development mode
});
app.configure('production', function(){
	// any configurations for production mode
});

//Example data submission
//app.post("/data", express.bodyParser(), function (req, res) {

//	var dataFieldA = req.body.dataFieldA;
//	var dataFieldB = req.body.dataFieldB;

//	...
//	validate & persist data
//	...

//	res.end();
//});

//Example data read
//app.get("/data", function (req, res) {

//	var response = {
//		dataFieldA: get persisted dataFieldA,
//		dataFieldB: get persisted dataFieldB,
//		...
//	}

//	res.write(JSON.stringify(response));

//	res.end();
//});

//static resources
//app.use(express.static("client"));

app.listen(process.env.PORT || 5000);