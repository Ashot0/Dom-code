import React from 'react';
import './service-card.scss';

import Image from '../image/Image';
import { Link } from 'react-router-dom';

const ServiceCard = ({
	className = '',
	text,
	title = '',
	img,
	LinkHref = '',
	LinkText,
}) => {
	return (
		<div className={className + ' service-card'}>
			<Link to={LinkHref}>
				<Image className="service-card__image" src={img} />
			</Link>

			<h3 className="service-card__title">{title}</h3>
			<p className="service-card__text">{text}</p>
			{LinkText ? (
				<Link className="service-card__link" to={LinkHref}>
					{LinkText}
				</Link>
			) : (
				''
			)}
		</div>
	);
};

export default ServiceCard;
