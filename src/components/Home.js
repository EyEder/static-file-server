var React = require('react');
import UploadFile from './UploadFile.js';

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
				<UploadFile />
				<div>
					{fileList}		
				</div>
			</div>
		);
	}
}

export default Home;