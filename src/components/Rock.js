import React from 'react';

const Rock = (props) => (
	<div className="rock center">
		<div className="hexagonal-12">
		    <div className="pad-lg">
		        {props.content}
		    </div>
		</div>
	</div>
);

export default Rock;