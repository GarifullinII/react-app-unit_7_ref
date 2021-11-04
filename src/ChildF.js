import React from 'react';

function ChildF(props) {
	return (
	<>
		<div>Functional component</div>
		<div>{props.ref}</div>
	</>
	)
}

export default ChildF;