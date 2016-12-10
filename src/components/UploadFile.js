import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class UploadFile extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			//'enctype' must be replaced by 'encType'
			<form action="/" encType="multipart/form-data" method="post">	
				<TextField name="description" hintText="file description" />
				<RaisedButton 
					label="Choose a file"
		      labelPosition="before"
		      style={styles.button}
		      containerElement="label"
				>
					<input type="file" name="upload" multiple="multiple" placeholder="upload file..." style={styles.exampleImageInput} />
				</RaisedButton>
				<RaisedButton 
					label="upload"
		      labelPosition="before"
		      style={styles.button}
		      containerElement="label"
				>
					<input type="submit" style={styles.exampleImageInput} />
				</RaisedButton>
			</form>
		);
	}
}

export default UploadFile;