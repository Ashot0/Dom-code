import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './burger.scss';

const Burger = ({ className = '' }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div
				className={className + ` menu-btn ${isOpen ? ' open' : ''}`}
				onClick={toggleMenu}
			>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>

			<div className={`overlay ${isOpen ? 'open' : ''}`}>
				{/* Ваше меню здесь */}
				<ul>
					<li>
						<Link
							onClick={toggleMenu}
							className="header__link"
							to="/"
						>
							Главная
						</Link>
					</li>
					<li>
						<Link
							onClick={toggleMenu}
							className="header__link"
							to="/news"
						>
							Объявления
						</Link>
					</li>
					<li>
						<Link
							onClick={toggleMenu}
							className="header__link"
							to="/photo"
						>
							Фотоальбом
						</Link>
					</li>
					<li>
						<Link
							onClick={toggleMenu}
							className="header__link"
							to="/direct"
						>
							Прямые договоры
						</Link>
					</li>
					<li>
						<Link
							onClick={toggleMenu}
							className="header__link"
							to="/payments"
						>
							Оплата коммунальных услуг
						</Link>
					</li>
					<li>
						<Link
							onClick={toggleMenu}
							className="header__link"
							to="/faq"
						>
							Ответы на вопросы
						</Link>
					</li>
					<li>
						<Link
							onClick={toggleMenu}
							className="header__link"
							to="/contacts"
						>
							Контакты
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Burger;
