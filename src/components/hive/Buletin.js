import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

let BLatests = ['Latest 1', 'Latest 2', 'Latest 3', 'Latest 4', 'Latest 5', 'Latest 6', 'Latest 7'];
let ListBLatest = BLatests.map(function(BLatest) {
	return (
		<div className="hexagonal-4" key={BLatest}>
            <div className="pad-lg">
	            <div className="card relative">
	                <div className="pad-lg">
                        By Foundername - <span className="text-red">Science</span>
                        <h2>{BLatest}</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore<Link to="#">... read more</Link>
                        <p></p>
                        <span className="text-mini">36 Minutes Ago - 486 Supporter</span>
	                </div>
	            </div>
                <div className="card-footer pad-down-monster center">
                    <Link to="#">Support</Link> - <Link to="#">Share</Link> - <Link to="#">Donate</Link>
                    <div className="hexagonal-sticky-6 push-up-lg">
                        <div className="pad-md pad-up-no pad-down-no">
                            <input className="btn btn-sm btn-block btn-green btn-rounded" type="button" value="JOIN" />
                        </div>
                    </div>
                    <div className="hexagonal-sticky-6 push-up-lg">
                        <div className="pad-md pad-up-no pad-down-no">
                            <input className="btn btn-sm btn-block btn-bee btn-rounded" type="button" value="MONITOR" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
});

let BOngoing = ['Ongoing 1', 'Ongoing 2', 'Ongoing 3'];
let ListBOngoing = BOngoing.map(function(BOngoing) {
	return (
		<div className="hexagonal-4" key={BOngoing}>
            <div className="pad-lg">
                <div className="card relative">
                    <div className="pad-lg">
                        By Foundername - <span className="text-red">Science</span>
                        <h2>{BOngoing}</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore<Link to="#">... read more</Link>
                        <p></p>
                        <span className="text-mini">7 Days Ago</span>
                    </div>
                </div>
                <div className="card-footer pad-down-monster center">
                    <Link to="#">Support</Link> - <Link to="#">Share</Link> - <Link to="#">Donate</Link>
                    <div className="hexagonal-sticky-6 push-up-lg">
                        <div className="pad-md pad-up-no pad-down-no">
                            <input className="btn btn-sm btn-block btn-green btn-rounded" type="button" value="JOIN" />
                        </div>
                    </div>
                    <div className="hexagonal-sticky-6 push-up-lg">
                        <div className="pad-md pad-up-no pad-down-no">
                            <input className="btn btn-sm btn-block btn-bee btn-rounded" type="button" value="MONITOR" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
});

let BFinish = ['Finish 1', 'Finish 2', 'Finish 3', 'Finish 4', 'Finish 5'];
let ListBFinish = BFinish.map(function(BFinish) {
	return (
		<div className="hexagonal-4" key={BFinish}>
            <div className="pad-lg">
                <div className="card relative">
                    <div className="pad-lg">
                        By Foundername - <span className="text-red">Craft</span>
                        <h2>{BFinish}</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore<Link to="#">... read more</Link>
                        <p></p>
                        <span className="text-mini">1 Month Ago</span>
                    </div>
                </div>
                <div className="card-footer pad-down-monster center">
                    <Link to="#">Support</Link> - <Link to="#">Share</Link> - <Link to="#">Donate</Link>
                    <div className="hexagonal-sticky-6 push-up-lg">
                        <div className="pad-md pad-up-no pad-down-no">
                            <input className="btn btn-sm btn-block btn-green btn-rounded" type="button" value="JOIN" />
                        </div>
                    </div>
                    <div className="hexagonal-sticky-6 push-up-lg">
                        <div className="pad-md pad-up-no pad-down-no">
                            <input className="btn btn-sm btn-block btn-bee btn-rounded" type="button" value="MONITOR" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
});

const BMLatest = () => (
    <div className="hexagonal-2">
        <div className="pad-lg hover buletin-active">
            <Link to="/buletin/latest">Latest Project</Link>
        </div> 
        <div className="pad-lg hover">
            <Link to="/buletin/ongoing">Ongoing Project</Link>
        </div> 
        <div className="pad-lg hover">
            <Link to="/buletin/finish">Finish Project</Link>
        </div> 
    </div>
);

const BMOngoing = () => (
    <div className="hexagonal-2">
        <div className="pad-lg hover">
            <Link to="/buletin/latest">Latest Project</Link>
        </div> 
        <div className="pad-lg hover buletin-active">
            <Link to="/buletin/ongoing">Ongoing Project</Link>
        </div> 
        <div className="pad-lg hover">
            <Link to="/buletin/finish">Finish Project</Link>
        </div> 
    </div>
);

const BMFinish = () => (
    <div className="hexagonal-2">
        <div className="pad-lg hover">
            <Link to="/buletin/latest">Latest Project</Link>
        </div> 
        <div className="pad-lg hover">
            <Link to="/buletin/ongoing">Ongoing Project</Link>
        </div> 
        <div className="pad-lg hover buletin-active">
            <Link to="/buletin/finish">Finish Project</Link>
        </div> 
    </div>
);

const BuletinMenu = () => (
	<Switch>
        <Route exact path="/" component={BMLatest} />
        <Route exact path="/buletin" component={BMLatest} />
        <Route exact path="/buletin/latest" component={BMLatest} />
        <Route path="/buletin/ongoing" component={BMOngoing} />
        <Route path="/buletin/finish" component={BMFinish} />
	</Switch>
);

const BCLatest = () => (
    <div className="hexagonal-10">
        <div className="hexagonal-12">
            {ListBLatest}
        </div>
    </div>
);

const BCOngoing = () => (
    <div className="hexagonal-10">
        <div className="hexagonal-12">
            {ListBOngoing}
        </div>
    </div>
);

const BCFinish = () => (
    <div className="hexagonal-10">
        <div className="hexagonal-12">
            {ListBFinish}
        </div>
    </div>
);

const BuletinContent = () => (
    <Switch>
        <Route exact path="/" component={BCLatest} />
        <Route exact path="/buletin" component={BCLatest} />
        <Route exact path="/buletin/latest" component={BCLatest} />
        <Route path="/buletin/ongoing" component={BCOngoing} />
        <Route path="/buletin/finish" component={BCFinish} />
    </Switch>
);

const Buletin = () => (
	<div className="buletin-component">
		<BuletinMenu />
		<BuletinContent />
	</div>
);

export default Buletin;