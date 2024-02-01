import React from 'react';

import './hat-line.scss';

const HatLine = ({ className = '', text = 'HatLine' }) => {
	return (
		<div className={className + ' hat-line'}>
			<p className="hat-line__text">{text}</p>
		</div>
	);
};

export default HatLine;
