import React from 'react';

function Child(props) {
	return (
	<>
		<div>Child</div>
		<div>{props.value}</div>
	</>
	)
}

export default Child;