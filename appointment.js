var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	label: {type: String, required: true},
	type: {type: String, required: false},
	start: {type: Date, required: true},
	end: {type: Date, required: false}
});

module.exports = schema;