var ReactDOMServer = require('react-dom/server');
var React = require('react');
var fs = require('fs');
var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
var redis = require('redis'),
		client = redis.createClient();
		

import Home from './components/Home.js';	//not use '''var Home = require('./components.Home')'''

module.exports = {
	home: function(req, res){
		// var fileList = fs.readdirSync(__dirname);	//use sync to get the file list  
		var fileList = [];
		var fileDesc = [];

		client.keys('*', (err, list) => {	//get all files' name list
			for(var file of list){
				client.hgetall(file, (err, data) => {
					fileDesc.push(data.description);
				});
			}
			fileList = list;
			res.render('home', 
					{ markup: ReactDOMServer.renderToString(<Home fileList={fileList} fileDesc={fileDesc} />) }	
					//renderToString receives a ReactElement rather than a React Component
				);
		});
	},
	upload: function(req, res){
		if(req.url == '/upload' && req.method.toLowerCase() == 'post'){
			var form = new formidable.IncomingForm();
			form.parse(req, (err, fields, files) => {
	      res.writeHead(200, {'content-type': 'text/plain'});
	      res.write('received upload:\n\n');
	      res.write(util.inspect({fields: fields, files: files}));
	      fs.readFile(files.upload.path,(err, data) => {
	      	if(err) throw err;
	      	client.hmset(files.upload.name, 			//save file with a key in redis database
      			"description", fields.description, 
      			"filesource", data,
      			"path", files.upload.path );
	      	// client.hgetall(files.upload.name, function(err, data){
	      	// 	console.log(data.path);
	      	// });
	      });
	      res.end();
	    });
			return;
		}
	},
	download: function(req, res){
		var filename = req.params.key;
		client.hgetall(filename, (err, data) => {
			if(err) throw err;
			res.download(data.path);
		});
	}
}