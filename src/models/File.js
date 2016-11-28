var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){

});


var FileSchema = mongoose.Schema({
	name: String,
	description: String,
	uploadTime: Date,
	downloadTimes: Number,
});

module.exports = mongoose.model('File', FileSchema);
