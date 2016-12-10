import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

if(typeof window !== 'undefined') {
	React.render(<Home />, document.getElementById('home'));
}