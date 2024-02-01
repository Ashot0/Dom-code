import React from 'react';

import './photo-page.scss';
import PhotoGallery from '../../components/photoGallery/PhotoGallery';

const PhotoPage = ({ className = '' }) => {
	return (
		<div className={className + ' photo-page'}>
			<PhotoGallery />
		</div>
	);
};

export default PhotoPage;
