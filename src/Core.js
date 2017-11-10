import React, { Component } from 'react';
import { appname } from './config/Appname';
import Rant from './components/Rant';
import BranchCore from './components/hive/BranchCore';
import Rock from './components/Rock';

const data = {
	appname: appname(),
	initializing: true,
}

class Core extends Component {
	state = {
		signature: 'Drawed by Musafir, '+data.appname+' 2017.',
    };

	componentWillMount(){}

	componentDidMount(){
		data.initializing = false;
	}

	render() {
		return (
			<div className="tree">
			    <Rant />
			    <div className="trunk">
					<BranchCore />
				</div>
			    <Rock content={this.state.signature} />
			</div>
		);
	}
}

export default Core;