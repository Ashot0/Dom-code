import React from 'react';

import './block-text-card.scss';
import Image from '../image/Image';
import Source from '../../assets/icons/quotes.svg';
import { Link } from 'react-router-dom';

const BlockTextCard = ({ className = '', text, title, LinkHref = '', src }) => {
	return (
		<div className={className + ' block-text-card'}>
			<Link to={LinkHref}>
				<div
					className={
						src
							? 'block-text-card__quotes-text block-text-card__quotes-text_blur'
							: 'block-text-card__quotes-text'
					}
				>
					<Image src={Source} />
					<p className="block-text-card__title">{title}</p>
					<div className="block-text-card__line"></div>
				</div>
				{src ? (
					<img
						className="block-text-card__image"
						src={src}
						alt="image"
					/>
				) : (
					<div className="block-text-card__bg-color"></div>
				)}
				<p className="block-text-card__text">{text}</p>
			</Link>
		</div>
	);
};

export default BlockTextCard;
