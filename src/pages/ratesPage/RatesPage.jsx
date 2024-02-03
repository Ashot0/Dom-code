import React from 'react';

import './rates-page.scss';
import HatLine from '../../components/hatLine/HatLine';
import Image from '../../components/image/Image';
import LineComponent from '../../components/lineComponent/LineComponent';

const RatesPage = ({ className = '' }) => {
	return (
		<div className={className + ' rates-page'}>
			<HatLine text="Тарифы ЖКХ на 2023 год" />
			<Image
				className="rates-page__img"
				src="https://i.imgur.com/evIUsxv.png"
			/>
			<LineComponent className="rates-page__line" />
			<a className="rates-page__link" href="#">
				Тарифы жилищно-коммунальные услуги для населения города
				Смоленска на 2023 год.
			</a>
			<LineComponent className="rates-page__line" />
			<a className="rates-page__link" href="#">
				Тарифы на подключение к ВС и ВО на 2023 год — Постановление
				№ 328 от 20.12.2022г
			</a>
			<LineComponent className="rates-page__line" />
		</div>
	);
};

export default RatesPage;
