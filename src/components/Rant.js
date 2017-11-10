import React from 'react';
import Logo from '../img/logo.png';
import {accessname} from '../library/Accessname';
import {background} from '../library/Background';
import BranchTab from './hive/BranchTab';

const data = {
	altimage: "Bottlefly",
	accessname: accessname(),
}

const Rant = (props) => (
	<div className="rant">
	    <div className="hexagonal-4 left">
		    <div className="pad-lg">
			    Logged in as <span className="text-green bold">{data.accessname}</span>
			</div>
	    </div>
	    <div className="hexagonal-4 center">
		    <div className="pad-lg">
			    <img className="top-logo-img" src={Logo} alt={data.altimage} />
			</div>
	    </div>
	    <div className="hexagonal-4 right">
		    <div className="pad-lg">
			    <input className="btn btn-md btn-blue btn-flat" type="button" value="Launch Project" onClick={() => (background("launch"))} />
			    <input className="btn btn-md btn-line-blue btn-flat" type="button" value="Sign Out" onClick={() => (background("signout"))} />
			</div>
	    </div>
	    <BranchTab />
	</div>
);

export default Rant;