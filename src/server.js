const fs = require('fs');
require('babel-register')({				// transpile jsx files for server side rendering in React
    presets: ['es2015', 'react']
});
var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var routes = require('./routes');

var formidable = require('formidable'),
    http = require('http'),
    util = require('util');


const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs(
	// {defaultLayout: 'main'}
	));
app.set('view engine', 'handlebars');

app.get('/', routes.home);

app.post('/upload', routes.upload);
// app.post('/upload', function(req, res){
// 	if(req.url == '/upload' && req.method.toLowerCase() == 'post'){
// 		var form = new formidable.IncomingForm();
// 		form.parse(req, function(err, fields, files) {
//       res.writeHead(200, {'content-type': 'text/plain'});
//       res.write('received upload:\n\n');
//       res.end(util.inspect({fields: fields, files: files}));
//     });
// 	return;
// 	}
// });

app.listen(3000,function(){
	console.log('listening at port 3000');
});
