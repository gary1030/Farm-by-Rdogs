import React from 'react';

function Reaction({ body, coordinates }) {
	const style = {
		marginTop: String(6 + 72 * coordinates.x) + 'px',
		marginLeft: String(6 + 72 * coordinates.y) + 'px',
	};
	return (
		<div className='plant reaction' style={style}>
			<p className='reaction-body'>{body}</p>
		</div>
	);
}

export default Reaction;
