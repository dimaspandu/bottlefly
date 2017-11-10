import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Buletin from './Buletin';
import Labs from './Labs';
import Portfolio from './Portfolio';

const BranchCore = () => (
	<Switch>
	    <Route exact path="/" component={Buletin} />
	    <Route path="/buletin" component={Buletin} />
	    <Route path="/labs" component={Labs} />
	    <Route path="/portfolio" component={Portfolio} />
	</Switch>
);

export default BranchCore;