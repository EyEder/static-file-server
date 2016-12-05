var ReactDOMServer = require('react-dom/server');
var React = require('react');
var fs = require('fs');
var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
// var hiredis = require('hiredis'),
		// reader = new hiredis.Reader({return_buffers: true});

import Home from './components/Home.js';	//not use '''var Home = require('./components.Home')'''

module.exports = {
	home: function(req, res){
		var fileList = fs.readdirSync(__dirname);	//use sync to get the file list 
		var markup = ReactDOMServer.renderToString(<Home fileList={fileList}/>);		//renderToString receives a ReactElement not a React Component

		res.render('home', {
			markup: markup
		});
	},
	upload: function(req, res){

		if(req.url == '/upload' && req.method.toLowerCase() == 'post'){
			var form = new formidable.IncomingForm();
			form.parse(req, (err, fields, files) => {
	      res.writeHead(200, {'content-type': 'text/plain'});
	      res.write('received upload:\n\n');
	      res.write(util.inspect({fields: fields, files: files}));
	      // reader.feed(files);
	      // res.end(reader.get());
	      fs.readFile(files.upload.path,(err, data) => {
	      	if(err) throw err;
	      	console.log(data);
	      });
	      res.end();
	    });
			return;
		}

		// res.render('upload');
	}
}