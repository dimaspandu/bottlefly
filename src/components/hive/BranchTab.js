import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Tab1 = () => (
	<div className="hexagonal-12 center">
        <div className="hexagonal-sticky-4 center tab tab-active">
            <div className="pad-lg">
                <Link to="/">BULETIN</Link>
            </div>
        </div>
        <div className="hexagonal-sticky-4 center tab">
            <div className="pad-lg">
                <Link to="/labs">LABS</Link>
            </div>
        </div>
        <div className="hexagonal-sticky-4 center tab">
            <div className="pad-lg">
                <Link to="/portfolio">PORTFOLIO</Link>
            </div>
        </div>
    </div>
);

const Tab2 = () => (
	<div className="hexagonal-12 center">
        <div className="hexagonal-sticky-4 center tab">
            <div className="pad-lg">
                <Link to="/">BULETIN</Link>
            </div>
        </div>
        <div className="hexagonal-sticky-4 center tab tab-active">
            <div className="pad-lg">
                <Link to="/labs">LABS</Link>
            </div>
        </div>
        <div className="hexagonal-sticky-4 center tab">
            <div className="pad-lg">
                <Link to="/portfolio">PORTFOLIO</Link>
            </div>
        </div>
    </div>
);

const Tab3 = () => (
	<div className="hexagonal-12 center">
        <div className="hexagonal-sticky-4 center tab">
            <div className="pad-lg">
                <Link to="/">BULETIN</Link>
            </div>
        </div>
        <div className="hexagonal-sticky-4 center tab">
            <div className="pad-lg">
                <Link to="/labs">LABS</Link>
            </div>
        </div>
        <div className="hexagonal-sticky-4 center tab tab-active">
            <div className="pad-lg">
                <Link to="/portfolio">PORTFOLIO</Link>
            </div>
        </div>
    </div>
);

const BranchTab = () => (
	<Switch>
	    <Route exact path="/" component={Tab1} />
	    <Route path="/buletin" component={Tab1} />
	    <Route path="/labs" component={Tab2} />
	    <Route path="/portfolio" component={Tab3} />
	</Switch>
);

export default BranchTab;