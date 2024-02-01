import React from 'react';
import './image.scss';

const Image = ({ src, className }) => {
	const Source = toString(src);
	console.log(src);
	console.log(Source);
	return (
		<div className={className + ' image'}>
			<img src={`./assets/${src}`} alt="image" />
		</div>
	);
};

export default Image;
