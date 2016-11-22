var express = require('express');
var path = require('path');
const app = express();

const fs = require('fs');

app.get('/', (req, res) => {
	fs.readdir('../src', (err, files) => {
		files.forEach((file) => {
			console.log(file);
		});
	});
	res.end();
});

app.listen(3000,function(){
	console.log('listening at port 3000');
});
