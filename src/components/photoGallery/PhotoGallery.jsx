import React, { useState } from 'react';
import PhotoPopup from '../photoPopup/PhotoPopup';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './photoGallery.scss';

const PhotoGallery = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [popupOpen, setPopupOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const images = [
		'https://i.imgur.com/90yOtqb.png',
		'https://i.imgur.com/Ne93JU6.png',
		'https://i.imgur.com/NLsQKTW.png',
		'https://i.imgur.com/dGwl6Ej.png',
		'https://i.imgur.com/J2NkBNp.png',
		'https://i.imgur.com/3nrtqhB.png',
		'https://i.imgur.com/dZFUkar.png',
		'https://i.imgur.com/prRAC0N.png',
		'https://i.imgur.com/YQLaDE3.png',
		'https://i.imgur.com/akkloLg.png',
		'https://i.imgur.com/fIPudCN.png',
		'https://i.imgur.com/ffRn885.png',
		'https://i.imgur.com/hpOzT00.png',
		'https://i.imgur.com/Rf7huQm.png',
		'https://i.imgur.com/wkTfNnq.png',
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
