import React from 'react';

let MyLabs = ['Lab 1', 'Lab 2'];
let ListLabs = MyLabs.map(function(MyLab) {
	return (
		<div className="hexagonal-4" key={MyLab}>
            <div className="pad-lg">
	            <div className="card relative hover">
	                <div className="pad-lg">
	                    <span className="text-placeholder"><h1>{MyLab}</h1></span>
	                </div>
	            </div>
            </div>
        </div>
	);
});

const Labs = () => (
	<div className="labs-component">
	    {ListLabs}
    </div>
);

export default Labs;