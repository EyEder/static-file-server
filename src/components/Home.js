var React = require('react');
import UploadFile from './UploadFile.js';
import File from './File.js';

class Home extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		var fileDesc = this.props.fileDesc;
		var fileList = this.props.fileList.map((file, index) => {
			return (
				// <div>
				// 	<p id='file-name'>{file}</p>
				// 	<p>{fileDesc[index]}</p>
				// 	<button><a href={'/download/' + file}>download</a></button>
				// </div>
				<File filename={file} description={fileDesc[index]} />
			);
		});
		return (
			<div>
				<UploadFile />
				{fileList}
			</div>
		);
	}
}

export default Home;