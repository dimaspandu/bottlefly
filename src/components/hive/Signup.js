import React from 'react';
import { val } from '../../library/Val';
import { Link } from 'react-router-dom';

function background(e, a, p, pc){
	let E = val(e);
	let A = val(a);
	let P = val(p);
	let PC = val(pc);

	if(E !== '' && A !== '' && P !== '' && PC !== '' ){
		if(P !== PC){
			document.getElementById('feedback').innerHTML = '<span class="text-red">Passcode Confirm not Match.</span>';
		}
		else{
			if(typeof(Storage) !== 'undefined'){
				localStorage.setItem('accessname', A);
				window.location = '/';
			}
			else{
				alert('BROWSER DOESN\'T SUPPORT WEB STORAGE!');
			}
		}
	}
	else{
		document.getElementById('feedback').innerHTML = '<span class="text-red">Please complete the form.</span>';
	}
}

function Content(props){
	return (
	    <div className="signup-component">
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
					            <input className="form-control" type="email" placeholder="Email" id="e" />
					        </div>
					        <div className="pad-lg">
					            <input className="form-control" type="text" placeholder="Accessname" id="a" />
					        </div>
					        <div className="pad-lg">
					            <input className="form-control" type="password" placeholder="Passcode" id="p" />
					        </div>
					        <div className="pad-lg">
					            <input className="form-control" type="password" placeholder="Passcode Confirm" id="pc" />
					        </div>
					        <div className="pad-lg">
					            <input className="btn btn-md btn-block btn-rounded" type="button" value="Sign Up" onClick={() => background("e", "a", "p", "pc")} />
					        </div>
					    </form>
						<div className="pad-lg center">
					        Already have account? <Link to="/">Sign In</Link> here.
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

const Signup = (props) => (
	<Content title="SIGNUP" />
);

export default Signup;