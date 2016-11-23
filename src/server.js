const fs = require('fs');
require('babel-register')({				// transpile jsx files for server side rendering in React
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

app.get('/', routes.home);

app.listen(3000,function(){
	console.log('listening at port 3000');
});
