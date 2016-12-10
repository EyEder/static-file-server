global.navigator = { userAgent: 'all' };	//userAgent should be supplied in the muiTheme context for server-side rendering.
const fs = require('fs');
require('babel-register')({				// transpile jsx files for server side rendering in React
    presets: ['es2015', 'react']
});
var express = require('express');
const app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var path = require('path');
var exphbs = require('express-handlebars');
var routes = require('./routes');

io.on('connection',()=>{
	console.log('connected to socket.io');
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs(
	// {defaultLayout: 'main'}
	));
app.set('view engine', 'handlebars');

app.get('/', routes.home);

app.post('/', routes.upload);

app.get('/download/:key', routes.download);

app.get('/del/:key', routes.delete);

server.listen(3000,function(){
	console.log('listening at port 3000');
});
