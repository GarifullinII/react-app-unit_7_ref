import React from 'react';

class ChildC extends React.Component {

	next() {
		console.log('Next!!!');
	}

	render() {

		return(
			<>
				<div>Class component</div>
			</>
		)
	}
}

export default ChildC;