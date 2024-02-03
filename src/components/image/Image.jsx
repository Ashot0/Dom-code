import React from 'react';
import './image.scss';

const Image = ({ src, className }) => {
	console.log(src);
	return (
		<div className={className + ' image'}>
			<img src={src} alt="image" />
		</div>
	);
};

export default Image;
