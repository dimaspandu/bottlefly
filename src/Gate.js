import React, { Component } from 'react';
import { appname } from './config/Appname';
import Logo from './img/logo.png';
import BranchGate from './components/hive/BranchGate';
import Rock from './components/Rock';

const data = {
	appname: appname(),
	initializing: true,
}

class Gate extends Component {	
	state = {
		altimage: data.appname,
		signature: (
			<span>
				<b>{data.appname} is Online Laboratory for Crafters and Scientist.</b>
				<p>Drawed by Musafir, 2017.</p>
			</span>
		),
	}

	componentWillMount(){}

	componentDidMount(){
		data.initializing = false;
	}

	render() {
		return (
			<div className="tree">
			    <div className="hole center">
			        <div className="pad-lg push-up-lg">
			            <img className="front-logo-img" src={Logo} alt={this.state.altimage} />
			        </div>
			    </div>
			    <div className="trunk">
			        <BranchGate />
	            </div>
			    <Rock content={this.state.signature} />
			</div>
		);
	}
}

export default Gate;