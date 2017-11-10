import React from 'react';

let Portfs = ['Portfolio 1', 'Portfolio 2', 'Portfolio 3', 'Portfolio 4', 'Portfolio 5', 'Portfolio 6', 'Portfolio 7', 'Portfolio 8', 'Portfolio 9', 'Portfolio 10'];
let ListPortfs = Portfs.map(function(Portf) {
	return (
		<div className="hexagonal-4" key={Portf}>
            <div className="pad-lg">
	            <div className="card relative hover">
	                <div className="pad-lg">
	                    <span className="text-placeholder"><h1>{Portf}</h1></span>
	                </div>
	            </div>
            </div>
        </div>
	);
});

const Portfolio = () => (
	<div className="labs-component">
	    {ListPortfs}
    </div>
);

export default Portfolio;