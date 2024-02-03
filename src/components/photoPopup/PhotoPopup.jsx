import React from 'react';
import 'swiper/swiper-bundle.css';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './photo-popup.scss';
import Image from '../image/Image';

const PhotoPopup = ({ images, onClose }) => {
	return (
		<div className="photo-popup">
			<Swiper modules={[Navigation]} navigation>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img
							className="photo-popup__img"
							src={image}
							alt={`Photo ${index + 1}`}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<button className="close-btn" onClick={onClose}>
				<Image src="https://i.imgur.com/MnA8oCQ.png" />
			</button>
		</div>
	);
};

export default PhotoPopup;
