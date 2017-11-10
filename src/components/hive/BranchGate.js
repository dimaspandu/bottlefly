import React from 'react';
import Signin from './Signin';
import Signup from './Signup';
import { Switch, Route } from 'react-router-dom';

const BranchGate = (props) => (
	<Switch>
	    <Route exact path="/" component={Signin} />
	    <Route path="/signup" component={Signup} />
	</Switch>
);

export default BranchGate;