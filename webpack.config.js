var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
	  'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
	  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
	  './index.js' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
    publicPath: '/assets/'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_module/,
				loader: 'react-hot!babel-loader?presets[]=es2015&presets[]=react'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
      {  
	        test: /\.json$/,
	        loader: 'json-loader'
	    },
	    {
	    	test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
  			loader: 'url-loader?limit=8192'
	    }
		]
	},
	plugins: [
	  new webpack.HotModuleReplacementPlugin()
	 //  new webpack.optimize.UglifyJsPlugin({
	 //    compress: {
	 //        warnings: false
	 //    }
		// }),
		// new webpack.optimize.DedupePlugin()
	]
}