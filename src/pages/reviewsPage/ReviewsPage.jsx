import React from 'react';

import './reviews-page.scss';
import HatLine from '../../components/hatLine/HatLine';

const ReviewsPage = ({ className = '' }) => {
	return (
		<div className={className + ' reviews-page'}>
			<HatLine text="Отзывы клиентов" />
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
						Email адрес
						<span className="submit-testimony-page__form-text_red">
							*
						</span>
					</span>
					<input
						className="submit-testimony-page__form-input"
						type="text"
						placeholder="Введите ваш email адрес"
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
						Ваш отзыв о нашей деятельности
					</span>
					<input
						className="submit-testimony-page__form-input"
						type="text"
						placeholder=" "
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

export default ReviewsPage;
