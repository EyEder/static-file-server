const fs = require('fs');
require('babel-register')({
    presets: ['es2015', 'react']
});
var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var routes = require('./routes');

const app = express();

app.engine('handlebars', exphbs(
	// {defaultLayout: 'main'}
	));
app.set('view engine', 'handlebars');

// app.get('/', (req, res) => {
// 	fs.readdir('../src', (err, files) => {
// 		files.forEach((file) => {
// 			console.log(file);
// 		});
// 	});
// 	res.end();
// });

app.get('/', routes.home);


app.listen(3000,function(){
	console.log('listening at port 3000');
});
