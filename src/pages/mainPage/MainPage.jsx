import React from 'react';

import './main-page.scss';
import SliderSwiper from '../../components/sliderSwiper/SliderSwiper';
import LineComponent from '../../components/lineComponent/LineComponent';
import TextBlock from '../../components/textBlock/TextBlock';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import BlockDateTextCard from '../../components/blockDateTextCard/BlockDateTextCard';
import BlockTextCard from '../../components/blockTextCard/BlockTextCard';

const MainPage = ({ className = '' }) => {
	const Source1 = 'FireBig.svg';
	const Source2 = 'ApplicationBig.svg';
	const Source3 = 'pencilBig.svg';
	const Source4 = 'HeartBig.svg';
	const Source5 = 'houseBig.svg';
	const Source6 = 'bookBig.svg';
	const Source7 = 'clipboardBig.svg';
	const Source8 = '1.png';
	const Source9 = '2.png';
	const Source10 = '3.png';
	const Source11 = '4.png';
	const Source12 = '5.png';
	return (
		<main className={className + ' main-page'}>
			<article className="main-page__swiper">
				<SliderSwiper />
			</article>
			<article className="main-page__swiper-text">
				Основная цель деятельности Компании — обеспечение уюта
				и комфорта собственников на территории, поддержание сохранности,
				чистоты и порядка, а так же оперативное решение проблем
				собственников, устранение их замечаний и рассмотрение
				предложений по повышению качества обслуживания.
			</article>
			<LineComponent dots />
			<article className="main-page__bunner bunner">
				<p className="bunner__title">Уважаемые жители!</p>
				<p className="bunner__text">
					Аварийная Диспетчерская служба ООО УК «Дом» работает
					круглосуточно, без выходных, телефон - +7 920 317-21-41
				</p>
			</article>
			<article>
				<TextBlock
					className="main-page__title-block"
					title="Сервис для потребителей"
					text="С помощью сайта вы можете передать показания электросчётчика, связаться с управляющей компанией, написать обращение, оставить отзыв. Это удобно и современно!"
				/>
			</article>
			<article className="main-page__service-cards">
				<ServiceCard
					className=""
					title="Передать показания"
					text="Показания принимаются с 23 по 25 число каждого месяца.Просим ежемесячно передавать показания"
					img={Source1}
					LinkHref="/submit"
					LinkText="Подробнее"
				/>
				<ServiceCard
					className=""
					title="Заявка в УК"
					text="Вы всегда можете обратиться к нам. Постараемся быстро помочь! Мы стараемся максимально помочь"
					img={Source2}
					LinkHref="/application"
					LinkText="Подробнее"
				/>
				<ServiceCard
					className=""
					title="Отзывы клиентов"
					text="Будем рады услышать от вас отзывы о нашей деятельности. Обращаем ваше внимание, отзывы о…"
					img={Source3}
					LinkHref="/reviews"
					LinkText="Подробнее"
				/>
				<ServiceCard
					className=""
					title="О нас"
					text="ООО УК «Дом» создано 07 июня 2022 года как управляющая и эксплуатирующая организация…"
					img={Source4}
					LinkHref="/aboutus"
					LinkText="Подробнее"
				/>
			</article>
			<LineComponent />
			<article>
				<TextBlock
					className="main-page__title-block main-page__title-block_margin-100-60"
					title="Информационный стенд"
				/>
				<section className="main-page__service-cards">
					<ServiceCard
						className="main-page__service-card"
						title="Жилищный фонд"
						text="Управляющая компания ООО УК «Дом» обслуживает огромное количество многоквартирных домов. Адрес, год постройки и площадь указаны в таблице."
						img={Source5}
						LinkHref="/fund"
					/>
					<ServiceCard
						className="main-page__service-card"
						title="Нормативные документы"
						text="Актуальные нормативно-правовые акты, регулирующие жилищныеправоотношения. Является основным источником жилищного права."
						img={Source6}
						LinkHref="/docs"
					/>
					<ServiceCard
						className="main-page__service-card"
						title="Отчётность"
						text="Лицензия № 038, годовой отчёт управляющей компании."
						img={Source7}
						LinkHref="/reporting"
					/>
				</section>
			</article>
			<LineComponent />
			<article className="main-page__title-block main-page__title-block_margin-80-60">
				<TextBlock
					title="Новости"
					text="Вся важная и актуальная информация публикуется на официальном сайте компании! Не верьте сторонним источникам."
				/>
			</article>
			<article className="main-page__block-date-text-card">
				<section className="main-page__section-date-text-card">
					<BlockDateTextCard
						text="Срочная информация!"
						data="31 декабря 2022 года"
						LinkHref="/news"
						src={Source8}
					/>
					<BlockDateTextCard
						text="С днём благодарения друзья!"
						data="23 ноября 2022 года"
						LinkHref="/news"
						src={Source9}
					/>
				</section>
				<section className="main-page__section-date-text-card">
					<BlockDateTextCard
						text="Срочно, это касается всех жителей!"
						data="31 октября 2022 года"
						LinkHref="/news"
						src={Source10}
					/>
					<BlockDateTextCard
						text="Уважаемые собственники."
						data="1 сентября 2022 года"
						LinkHref="/news"
						src={Source11}
					/>
				</section>
			</article>
			<article className="main-page__services-block">
				<section className="main-page__services">
					<BlockTextCard
						text="Тарифы на жилищно-коммунальные услуги для населения города Смоленск на 2023г."
						LinkHref="/rates"
						src={Source12}
						title="АКТУАЛЬНЫЕ ТАРИФЫ ЖКХ"
					/>
					<BlockTextCard
						text="Отзывы наших клиентов. Здесь вы можете узнать всё о нашей компании."
						LinkHref="/reviews"
						title="ОТЗЫВЫ НАШИХ КЛИЕНТОВ"
					/>
				</section>
				<LineComponent />
			</article>
		</main>
	);
};

export default MainPage;
