var React = require('react');

class Filelist extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var filename = this.props.filename;
		return(
			<div>
				<p id='file-name'>{filename}</p>
				<p>{this.props.description}</p>
				<button><a href={'/download/' + filename}>download</a></button>
				<button><a href={'/del/' + filename}>remove</a></button>
			</div>
		);
	}
}

export default Filelist;