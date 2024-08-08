import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../image/Image';
import ScrollToTopButton from '../scrollToTopButton/ScrollToTopButton';

import './header.scss';
import Burger from '../burger/Burger';

const Header = ({ className = '' }) => {
	return (
		<header className={className + ' header'}>
			<Link to="/">
				<Image
					className="header__logo"
					src="https://i.imgur.com/baokXjD.png"
				/>
			</Link>
			<nav className="header__navigation">
				<ul className="header__navigation-list">
					<li>
						<Link className="header__link" to="/">
							Главная
						</Link>
					</li>
					<li>
						<Link className="header__link" to="/news">
							Объявления
						</Link>
					</li>
					<li>
						<Link className="header__link" to="/photo">
							Фотоальбом
						</Link>
					</li>
					<li>
						<Link className="header__link" to="/direct">
							Прямые договоры
						</Link>
					</li>
					<li>
						<Link className="header__link" to="/payments">
							Оплата коммунальных услуг
						</Link>
					</li>
					<li>
						<Link className="header__link" to="/faq">
							Ответы на вопросы
						</Link>
					</li>
					<li>
						<Link className="header__link" to="/contacts">
							Контакты
						</Link>
					</li>
				</ul>
			</nav>
			<ScrollToTopButton />
			<div className="header__buttons">
				<Burger className="header__burger" />
			</div>
		</header>
	);
};

export default Header;
