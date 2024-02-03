import React from 'react';

import './contacts-page.scss';
import Image from '../../components/image/Image';
import LineComponent from '../../components/lineComponent/LineComponent';

const ContactsPage = ({ className = '' }) => {
	return (
		<div className={className + ' contacts-page'}>
			<h3 className="contacts-page__title">Наши контакты</h3>
			<p className="contacts-page__text-icon">
				<Image src="https://i.imgur.com/4gWuY3t.png" />
				214000, (почтовый адрес) г. Смоленск, переулок Реадовский, д. 5
			</p>
			<p className="contacts-page__text-icon">
				<Image src="https://i.imgur.com/PoX1AKV.png" />
				Телефон: +7 919 042-45-90, +7 950 705-95-85
			</p>
			<p className="contacts-page__text-icon">
				<Image src="https://i.imgur.com/0yymzd2.png" />
				Email - ykdom67@yandex.ru
			</p>
			<LineComponent />
			<h4 className="contacts-page__title-h4">
				Технический отдел, участок Гусино
			</h4>
			<p className="contacts-page__text-icon">
				<Image src="https://i.imgur.com/PoX1AKV.png" />
				Телефон: +7 920 301-66-30
			</p>
			<p className="contacts-page__text-icon">
				<Image src="https://i.imgur.com/5IQnLks.png" />
				Понедельник-четверг: время работы 8:00–16:00
			</p>
			<p className="contacts-page__text">
				Пятница: время работы 8:00–15:00.
			</p>
			<p className="contacts-page__text">Перерыв с 12:00 – 13:00</p>
			<p className="contacts-page__text">
				Суббота, воскресенье: выходные дни.
			</p>
			<LineComponent />
			<h4 className="contacts-page__title-h4">Бухгалтерия</h4>
			<p className="contacts-page__text-icon">
				<Image src="https://i.imgur.com/PoX1AKV.png" />
				Телефон:+7 904 360-55-15
			</p>
			<h4 className="contacts-page__title-h4">Диспетчерская служба</h4>
			<p className="contacts-page__text-icon">
				<Image src="https://i.imgur.com/PoX1AKV.png" />
				Телефон: +7 920 301-66-30
			</p>
			<LineComponent />
		</div>
	);
};

export default ContactsPage;
