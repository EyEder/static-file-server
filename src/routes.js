var ReactDOMServer = require('react-dom/server');
var React = require('react');

import Home from './components/Home.js';

// var Home = React.createFactory(require('./components/Home'));

module.exports = {
	home: function(req, res){
		var markup = ReactDOMServer.renderToString(<Home />);

		res.render('home', {
			markup: markup
		});
	}
}