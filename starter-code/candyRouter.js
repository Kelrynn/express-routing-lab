var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [
	{"id":1,"name":"Chewing Gum","color":"Red"},
	{"id":2,"name":"Pez","color":"Green"},
	{"id":3,"name":"Marshmallow","color":"Pink"},
	{"id":4,"name":"Candy Stick","color":"Blue"}
];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.json(candies);
});

// Fill out the rest of the routes here

router.get('/:id', (req,res) => {
	var myCandy = candies.filter((element) => {
		return element.id == req.params.id;
	});
	res.json(myCandy[0]);
});

router.post('/', (req, res) => {
	candies.push(req.body);
	res.send("Candy saved!");
});

router.put('/:id',(req, res) => {
	var myCandy = candies.filter((element) => {
		return element.id == req.params.id;
	});
	var index = candies.indexOf(myCandy[0]);
	candies[index] = req.body;
	res.send("Candy Updated!");
});

router.delete('/:id', (req, res) => {
	var myCandy = candies.filter((element) => {
		return element.id == req.params.id;
	});
	var index = candies.indexOf(myCandy[0]);
	candies.splice(index, 1);
	res.send("Candy Deleted");
});

module.exports = router;


















