import React from 'react';

import './submit-testimony-page.scss';
import HatLine from '../../components/hatLine/HatLine';
import Image from '../../components/image/Image';
import Source1 from './../../assets/mainPage/Fire.svg';

const SubmitTestimonyPage = ({ className = '' }) => {
	return (
		<div className={className + ' submit-testimony-page'}>
			<HatLine text="Передать показания" />
			<h2 className="submit-testimony-page__title">
				Показания принимаются с 23 по 25 число каждого месяца. Просим
				ежемесячно передавать показания для корректных начислений.
			</h2>
			<Image className="submit-testimony-page__image" src={Source1} />
			<form
				className="submit-testimony-page__form"
				action=""
				method="post"
			>
				<h3 className="submit-testimony-page__form-title">
					Отправить заявку
				</h3>
				<div className="submit-testimony-page__form-line">
					<span className="submit-testimony-page__form-text">
						Фамилия
						<span className="submit-testimony-page__form-text_red">
							*
						</span>
					</span>
					<input
						className="submit-testimony-page__form-input"
						type="text"
						placeholder="Введите вашу фамилию"
						name=""
						id=""
					/>
				</div>
				<div className="submit-testimony-page__form-line">
					<span className="submit-testimony-page__form-text">
						Имя
						<span className="submit-testimony-page__form-text_red">
							*
						</span>
					</span>
					<input
						className="submit-testimony-page__form-input"
						type="text"
						placeholder="Введите ваше имя"
						name=""
						id=""
					/>
				</div>
				<div className="submit-testimony-page__form-line">
					<span className="submit-testimony-page__form-text">
						Улица
						<span className="submit-testimony-page__form-text_red">
							*
						</span>
					</span>
					<input
						className="submit-testimony-page__form-input"
						type="text"
						placeholder="Введите улицу"
						name=""
						id=""
					/>
				</div>
				<div className="submit-testimony-page__form-line">
					<span className="submit-testimony-page__form-text">
						Дом
						<span className="submit-testimony-page__form-text_red">
							*
						</span>
					</span>
					<input
						className="submit-testimony-page__form-input"
						type="text"
						placeholder="Введите номер дома"
						name=""
						id=""
					/>
				</div>
				<div className="submit-testimony-page__form-line">
					<span className="submit-testimony-page__form-text">
						Квартира
						<span className="submit-testimony-page__form-text_red">
							*
						</span>
					</span>
					<input
						className="submit-testimony-page__form-input"
						type="text"
						placeholder="Введите номер квартиры"
						name=""
						id=""
					/>
				</div>
				<div className="submit-testimony-page__form-line">
					<span className="submit-testimony-page__form-text">
						Номер телефона
					</span>
					<input
						className="submit-testimony-page__form-input"
						type="text"
						placeholder="Введите номер телефона"
						name=""
						id=""
					/>
				</div>
				<div className="submit-testimony-page__form-line">
					<span className="submit-testimony-page__form-text">
						Запишите показания электросчётчика
					</span>
					<input
						className="submit-testimony-page__form-input"
						type="text"
						placeholder="Введите показания"
						name=""
						id=""
					/>
				</div>
				<button
					className="submit-testimony-page__form-button"
					type="button"
				>
					Отправить заявку
				</button>
			</form>
		</div>
	);
};

export default SubmitTestimonyPage;
