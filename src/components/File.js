import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Filelist extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var filename = this.props.filename;
		return(
			<Card>
			  <CardHeader
			    title={filename} 
			    subtitle={this.props.description} 
			  />
			  <CardActions>
			    <FlatButton label="download" href={'/download/' + filename} />
			    <FlatButton label="delete" href={'/del/' + filename} />
			  </CardActions>
			</Card>
		);
	}
}

export default Filelist;
