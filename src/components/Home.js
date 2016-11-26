var React = require('react');

class Home extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		var fileList = this.props.fileList.map((file, index) => {
			return (
				<div>
					<p id='file-name'>{file}</p>
					<p>details</p>
					<button>download</button>
				</div>
			);
		});
		return (
			<div>
				{fileList}		
			</div>
		);
	}
}

export default Home;