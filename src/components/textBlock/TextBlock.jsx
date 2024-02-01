import React from 'react';

import './text-block.scss';

const TextBlock = ({ className = '', text = '', title = '' }) => {
	return (
		<div className={className + ' text-block'}>
			<h3 className="text-block__title">{title}</h3>
			<p className="text-block__text">{text}</p>
		</div>
	);
};

export default TextBlock;
