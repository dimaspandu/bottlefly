import React from 'react';

const Trunk = (props) => (
	<div className="trunk">
		<div className="hexagonal-12">
			<div className="pad-lg">
			    {props.content}
			</div>
		</div>
	</div>
);

export default Trunk;