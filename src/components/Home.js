var React = require('react');

class Home extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<p id='file-name'>file name</p>
				<p>details</p>
				<button>download</button>
			</div>
			);
	}
}

export default Home;