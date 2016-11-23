var ReactDOMServer = require('react-dom/server');
var React = require('react');

import Home from './components/Home.js';	//not use '''var Home = require('./components.Home')'''

module.exports = {
	home: function(req, res){
		var markup = ReactDOMServer.renderToString(<Home />);		//renderToString receives a ReactElement not a React Component

		res.render('home', {
			markup: markup
		});
	}
}