import React, { useState } from 'react';
import PhotoPopup from '../photoPopup/PhotoPopup';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './photoGallery.scss';

import Source1 from '../..//assets/photoPage/1.png';
import Source2 from '../..//assets/photoPage/2.png';
import Source3 from '../..//assets/photoPage/3.png';
import Source4 from '../..//assets/photoPage/4.png';
import Source5 from '../..//assets/photoPage/5.png';
import Source6 from '../..//assets/photoPage/6.png';
import Source7 from '../..//assets/photoPage/7.png';
import Source8 from '../..//assets/photoPage/8.png';
import Source9 from '../..//assets/photoPage/9.png';
import Source10 from '../..//assets/photoPage/10.png';
import Source11 from '../..//assets/photoPage/11.png';
import Source12 from '../..//assets/photoPage/12.png';
import Source13 from '../..//assets/photoPage/13.png';
import Source14 from '../..//assets/photoPage/14.png';
import Source15 from '../..//assets/photoPage/15.png';

const PhotoGallery = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [popupOpen, setPopupOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const images = [
		Source1,
		Source2,
		Source3,
		Source4,
		Source5,
		Source6,
		Source7,
		Source8,
		Source9,
		Source10,
		Source11,
		Source12,
		Source13,
		Source14,
		Source15,
	];

	const openPopup = (index) => {
		setPopupOpen(true);
		setActiveIndex(index);
	};

	const closePopup = () => {
		setPopupOpen(false);
	};

	return (
		<div className="photoGallery">
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode
				watchSlidesVisibility
				watchSlidesProgress
				className="thumbsContainer"
			>
				{images.map((image, index) => (
					<img
						key={index}
						onClick={() => openPopup(image)}
						src={image}
						alt={`Thumbnail ${index + 1}`}
						className="thumbImage"
					/>
				))}
			</Swiper>

			{popupOpen && <PhotoPopup images={images} onClose={closePopup} />}
		</div>
	);
};

export default PhotoGallery;
