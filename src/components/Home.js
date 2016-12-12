import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import UploadFile from './UploadFile.js';
import File from './File.js';

var NProgress = require('nprogress');

injectTapEventPlugin();

class Home extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		var fileDesc = this.props.fileDesc;
		var fileList = this.props.fileList.map((file, index) => {
			return (
				<File filename={file} key={index} description={fileDesc[index]} />
			);
		});
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div>
					<UploadFile />
					{fileList}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Home;
