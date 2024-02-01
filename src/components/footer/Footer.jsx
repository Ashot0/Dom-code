import React from 'react';

import './footer.scss';

const Footer = ({ className = '' }) => {
	return (
		<footer className={className + ' footer'}>
			<div className="footer__wrapper">
				{/* <div className="footer__text-block">
					
				</div> */}
				<div className="footer__text-block footer__text-block_1">
					<p className="footer__text-title">О компании</p>
					<p className="footer__text-line">
						ООО УК «ДОМ» создано 07 июня 2022 года как управляющая
						и эксплуатирующая организация. Основная цель
						деятельности компании — обеспечение уюта и комфорта
						собственников.
					</p>
				</div>
				<div className="footer__text-block footer__text-block_2">
					<p className="footer__text-title">
						Технический отдел “Гусино”
					</p>
					<p className="footer__text-line">
						Телефон: +7 920 301-66-30
					</p>
					<p className="footer__text-line">
						Понедельник-четверг,время работы: 08:00–16:00
					</p>
					<p className="footer__text-line">
						Пятница, время работы: 08:00–15:00
					</p>
					<p className="footer__text-line">
						Суббота, воскресенье — выходные дни
					</p>
					<p className="footer__text-line">Перерыв: 12:00–12:48</p>
				</div>
				<div className="footer__text-block footer__text-block_3">
					<p className="footer__text-title">Бухгалтерия</p>
					<p className="footer__text-line">
						Телефон: +7 904 360-55-15
					</p>
					<p className="footer__text-line">
						Понедельник-четверг, время работы: 09:00–18:00
					</p>
					<p className="footer__text-line">
						Пятница, время работы: 09:00–17:00
					</p>
					<p className="footer__text-line">
						Суббота, воскресенье — выходные дни
					</p>
					<p className="footer__text-line">Перерыв: 13:00–14:00</p>
				</div>
				<div className="footer__text-block footer__text-block_4">
					<p className="footer__text-title">
						Технический участок “Гусино”
					</p>
					<p className="footer__text-line">
						Телефон: +7 920 301-66-30
					</p>
					<p className="footer__text-line">
						Понедельник-четверг,время работы: 08:00–16:00
					</p>
					<p className="footer__text-line">
						Пятница, время работы: 08:00–15:00
					</p>
					<p className="footer__text-line">Перерыв: 12:00–13:00</p>
					<p className="footer__text-line">
						Суббота, воскресенье — выходные дни
					</p>
				</div>
				<div className="footer__text-block footer__text-block_5">
					<p className="footer__text-title">Диспетчерская служба</p>
					<p className="footer__text-line">
						Работаем круглосуточно, без выходных +7 920 301-66-30
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
