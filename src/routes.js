var ReactDOMServer = require('react-dom/server');
var React = require('react');
var fs = require('fs');

import Home from './components/Home.js';	//not use '''var Home = require('./components.Home')'''

module.exports = {
	home: function(req, res){
		var fileList = fs.readdirSync(__dirname);	//use sync to get the file list 
		var markup = ReactDOMServer.renderToString(<Home fileList={fileList}/>);		//renderToString receives a ReactElement not a React Component

		res.render('home', {
			markup: markup
		});
	}
}