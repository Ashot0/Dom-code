import React from 'react';

import Image from '../../components/image/Image';
import './payment-of-utility-services.scss';
import Source1 from './../../assets/paymentPage.svg';
import Source2 from './../../assets/icons/ArrowLeft.svg';
import CustomCheckbox from '../../components/customCheckbox/CustomCheckbox';

const PaymentOfUtilityServices = ({ className = '' }) => {
	return (
		<div className={className + ' payment-of-utility-services'}>
			<div className="payment-of-utility-services__first-block">
				<div className="payment-of-utility-services__text">
					<p className="payment-of-utility-services__title">
						Оплата коммунальных услуг дистанционно
					</p>
					Напоминаем, что согласно условиям договора, вам необходимо
					своевременно производить оплату коммунальных услуг. Текущая
					оплата производится до 10 числа последующего месяца. Оплата
					с 15-го числа считается просроченной
				</div>
				<Image
					src={Source1}
					className="payment-of-utility-services__image"
				/>
			</div>
			<form className="payment-of-utility-services__payment-form payment-form">
				<p className="payment-form__title">Оплата коммунальных услуг</p>
				<div className="payment-form__first-block">
					<input
						className="payment-form__input"
						type="text"
						placeholder="Фамилия"
					/>
					<input
						className="payment-form__input"
						type="text"
						placeholder="Имя"
					/>
					<input
						className="payment-form__input"
						type="text"
						placeholder="Лицевой счёт"
					/>
				</div>
				<p className="payment-form__sum">Сумма к оплате</p>
				<div className="payment-form__first-block">
					<input
						className="payment-form__input"
						type="text"
						placeholder="0,00 ₽"
					/>
					<button className="payment-form__button" type="submit">
						Оплатить
					</button>
					<button className="payment-form__send-button" type="submit">
						<Image src={Source2} />
					</button>
				</div>
				<CustomCheckbox
					className="payment-form__checkbox"
					text="Я даю согласие на обработку персональных данных, соглашаюсь с политикой конфиденциальности."
				/>
			</form>
		</div>
	);
};

export default PaymentOfUtilityServices;
