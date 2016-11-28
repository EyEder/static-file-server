var React = require('react');

class UploadFile extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<form method='POST' enctype='multipart/form-data'>
				<input type='text' placeholder='file description' />
				<input type='file' placeholder='upload file...' />
				<input type='submit' value='upload' />
			</form>
		);
	}
}

export default UploadFile;