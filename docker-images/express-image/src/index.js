var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send(generateCities());
});

app.listen(3000, function() {
	console.log("Example listening");
});

function generateCities() {
	var numberOfCities = chance.integer({min: 0, max: 10});
	console.log(numberOfCities);

	var cities = [];
	for (var i = 0; i < numberOfCities; ++i) {
		cities.push({name: chance.city(), zip: chance.zip()});
	};

	console.log(cities);
	return cities;
}
