var React = require('react');
import UploadFile from './UploadFile.js';

class Home extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		var dir = this.props.dir;
		var fileList = this.props.fileList.map((file, index) => {
			return (
				<div>
					<p id='file-name'>{file}</p>
					<p>details</p>
					<button><a href={'/download' + dir + '/' + file}>download</a></button>
				</div>
			);
		});
		return (
			<div>
				<UploadFile />
				<div>
					{fileList}		
				</div>
			</div>
		);
	}
}

export default Home;