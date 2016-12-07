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
				<File filename={file} description={fileDesc[index]} />
			);
		});
		return (
			<div id="homebox">
				<UploadFile />
				{fileList}
			</div>
		);
	}
}

export default Home;