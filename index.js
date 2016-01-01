var mongoose = require('mongoose');
var appointment = require ('./appointment');

mongoose.connect('mongodb://localhost:27017/test');

var Appt = mongoose.model('Appt', appointment);

var appt1 = new Appt({
	label: "Premier rdv",
	type: "perso",
	start: new Date('2016-01-04')
});

appt1.save(function(err, appt1){
	if (err) return console.error(err);
	console.log("Object inserted : " + appt1);
});