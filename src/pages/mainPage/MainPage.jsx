import React from 'react';

import './main-page.scss';
import SliderSwiper from '../../components/sliderSwiper/SliderSwiper';
import LineComponent from '../../components/lineComponent/LineComponent';
import TextBlock from '../../components/textBlock/TextBlock';
import ServiceCard from '../../components/serviceCard/ServiceCard';
import BlockDateTextCard from '../../components/blockDateTextCard/BlockDateTextCard';
import BlockTextCard from '../../components/blockTextCard/BlockTextCard';

const MainPage = ({ className = '' }) => {
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
					img="https://i.imgur.com/utMmvap.png"
					LinkHref="/submit"
					LinkText="Подробнее"
				/>
				<ServiceCard
					className=""
					title="Заявка в УК"
					text="Вы всегда можете обратиться к нам. Постараемся быстро помочь! Мы стараемся максимально помочь"
					img="https://i.imgur.com/vPbK9ky.png"
					LinkHref="/application"
					LinkText="Подробнее"
				/>
				<ServiceCard
					className=""
					title="Отзывы клиентов"
					text="Будем рады услышать от вас отзывы о нашей деятельности. Обращаем ваше внимание, отзывы о…"
					img="https://i.imgur.com/a1aIXcr.png"
					LinkHref="/reviews"
					LinkText="Подробнее"
				/>
				<ServiceCard
					className=""
					title="О нас"
					text="ООО УК «Дом» создано 07 июня 2022 года как управляющая и эксплуатирующая организация…"
					img="https://i.imgur.com/UUJNmit.png"
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
						img="https://i.imgur.com/JrYoEy5.png"
						LinkHref="/fund"
					/>
					<ServiceCard
						className="main-page__service-card"
						title="Нормативные документы"
						text="Актуальные нормативно-правовые акты, регулирующие жилищныеправоотношения. Является основным источником жилищного права."
						img="https://i.imgur.com/9LvdKJs.png"
						LinkHref="/docs"
					/>
					<ServiceCard
						className="main-page__service-card"
						title="Отчётность"
						text="Лицензия № 038, годовой отчёт управляющей компании."
						img="https://i.imgur.com/70ah2vx.png"
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
						src="https://i.imgur.com/oXks0a2.png"
					/>
					<BlockDateTextCard
						text="С днём благодарения друзья!"
						data="23 ноября 2022 года"
						LinkHref="/news"
						src="https://i.imgur.com/3B9yNHr.png"
					/>
				</section>
				<section className="main-page__section-date-text-card">
					<BlockDateTextCard
						text="Срочно, это касается всех жителей!"
						data="31 октября 2022 года"
						LinkHref="/news"
						src="https://i.imgur.com/66ISddV.png"
					/>
					<BlockDateTextCard
						text="Уважаемые собственники."
						data="1 сентября 2022 года"
						LinkHref="/news"
						src="https://i.imgur.com/UlD5mrp.png"
					/>
				</section>
			</article>
			<article className="main-page__services-block">
				<section className="main-page__services">
					<BlockTextCard
						text="Тарифы на жилищно-коммунальные услуги для населения города Смоленск на 2023г."
						LinkHref="/rates"
						src="https://i.imgur.com/SDC3lPE.png"
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
