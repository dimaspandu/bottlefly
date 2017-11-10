import React from 'react';
import { val } from '../../library/Val';
import { Link } from 'react-router-dom';

function background(a, p){
	let A = val(a);
	let P = val(p);

	if(A === 'nahl' && P === ' '){
		if(typeof(Storage) !== 'undefined'){
			localStorage.setItem("accessname", A);
			window.location.reload();
		}
		else{
			alert('BROWSER DOESN\'T SUPPORT WEB STORAGE!');
		}
	}
	else{
		document.getElementById('feedback').innerHTML = '<span class="text-red">Invalid Accessname and/or Passcode.</span>';
	}
}

function Content(props){
	return (
	    <div className="signin-component">
			<div className="hexagonal-4">
			    <div className="pad-space"></div>
			</div>
			<div className="hexagonal-4">
			    <div className="pad-lg">
			        <div className="card">
					    <div className="card-header center">
					        <span className="headtext" id="feedback">{props.title}</span>
					    </div>
					    <form name="signin">
					        <div className="pad-lg">
					            <input className="form-control" type="text" placeholder="Accessname" id="a" />
					        </div>
					        <div className="pad-lg">
					            <input className="form-control" type="password" placeholder="Passcode" id="p" />
					        </div>
					        <div className="pad-lg">
					            <input className="btn btn-md btn-block btn-bee btn-rounded" type="button" value="Sign In" onClick={() => background("a", "p")} />
					        </div>
					    </form>
						<div className="pad-lg center">
					        Don't have account? <Link to="/signup">Sign Up</Link> here.
					    </div>
					</div>
			    </div>
			</div>
			<div className="hexagonal-4">
			    <div className="pad-space"></div>
			</div>
		</div>
	);
}

const Signin = (props) => (
	<Content title="SIGNIN" />
);

export default Signin;