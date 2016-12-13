var ReactDOMServer = require('react-dom/server');
var React = require('react');
var fs = require('fs');
var formidable = require('formidable');
var redis = require('redis'),
		client = redis.createClient();

import Home from './components/Home.js';	//not use '''var Home = require('./components.Home')'''
import UploadFile from './components/UploadFile.js';

module.exports = {
	home: (req, res) => {
		// var fileList = fs.readdirSync(__dirname);	//use sync to get the file list  
		var fileList = [];
		var fileDesc = [];
		client.keys('*', (err, list) => {	//get all files' name list
			if(list.length == 0){	//if db is empty
				res.send(ReactDOMServer.renderToString(<Home fileList={fileList} fileDesc={fileDesc} />));
			}
			for(var file of list){
				client.hgetall(file, (err, data) => {
					fileDesc.push(data.description);
					if(fileDesc.length == list.length){
						fileList = list;
						// res.send(ReactDOMServer.renderToString(<Home fileList={fileList} fileDesc={fileDesc} />) );
						//renderToString receives a ReactElement rather than a React Component
						res.render('home', {
							markup: ReactDOMServer.renderToString(<Home fileList={fileList} fileDesc={fileDesc} />)
						});
					}
				});
			}
		});
	},
	upload: (req, res) => {
		if(req.method.toLowerCase() == 'post'){
			var form = new formidable.IncomingForm();
			form.parse(req, (err, fields, files) => {
	      fs.readFile(files.upload.path,(err, data) => {
	      	if(err) throw err;
	      	if(files.upload.size == 0) {
	      		res.redirect('back');
	      		return;
	      	}
	      	client.hmset(files.upload.name, 			//save file with a key in redis database
      			"description", fields.description, 
      			"filesource", data,
      			"path", files.upload.path );
	      	res.redirect('/');
	      });
	    });
		}
	},
	download: (req, res) => {
		var filename = req.params.key;
		client.hgetall(filename, (err, data) => {
			if(err) throw err;
			res.download(data.path, filename);
		});
	},
	delete: (req, res) => {
		var filename = req.params.key;
		client.del(filename, (err) => {
			if(err) throw err;
			res.redirect('/');
		})
	}
}