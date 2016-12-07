var React = require('react');

class UploadFile extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			//'enctype' must be replaced by 'encType'
			<form action="/" encType="multipart/form-data" method="post">	
				<input type="text" name="description" placeholder="file description" />
				<input type="file" name="upload" multiple="multiple" placeholder="upload file..." />
				<input type="submit" value="upload" />
			</form>
		);
	}
}

export default UploadFile;