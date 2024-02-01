import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';
import Image from '../image/Image';
import Source from '../../assets/mainPage/photo1.svg';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider-swiper.scss';

const SliderSwiper = ({ className = '' }) => {
	return (
		<Swiper
			pagination={true}
			modules={[Pagination]}
			className={className + ' slider-swiper'}
			spaceBetween={5}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide className="slider-swiper__slide">
				<div className="slide-photo">
					<Image className="slide-photo__image" src={Source} />
					<p className="slide-photo__text">
						<p className="slide-photo__title">
							Управляющая компания ООО УК «Дом»
						</p>
						Наша задача — оказание профессиональной помощи
						собственникам и нанимателям жилья в создании комфортных
						и безопасных условий проживания в многоквартирных домах.
					</p>
					<Link className="slide-photo__link" to="/photo">
						Наши дома
					</Link>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slide-photo">
					<Image className="slide-photo__image" src={Source} />
					<p className="slide-photo__text">
						<p className="slide-photo__title">
							Управляющая компания ООО УК «Дом»
						</p>
						Наша задача — оказание профессиональной помощи
						собственникам и нанимателям жилья в создании комфортных
						и безопасных условий проживания в многоквартирных домах.
					</p>
					<Link className="slide-photo__link" to="/photo">
						Наши дома
					</Link>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="slide-photo">
					<Image className="slide-photo__image" src={Source} />
					<p className="slide-photo__text">
						<p className="slide-photo__title">
							Управляющая компания ООО УК «Дом»
						</p>
						Наша задача — оказание профессиональной помощи
						собственникам и нанимателям жилья в создании комфортных
						и безопасных условий проживания в многоквартирных домах.
					</p>
					<Link className="slide-photo__link" to="/photo">
						Наши дома
					</Link>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default SliderSwiper;
