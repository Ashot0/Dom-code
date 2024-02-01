import React from 'react';

import './block-date-text-card.scss';
import Image from '../image/Image';
import { Link } from 'react-router-dom';

const BlockDateTextCard = ({
	className = '',
	text,
	data,
	LinkHref = '',
	src,
}) => {
	return (
		<div className={className + ' block-date-text-card'}>
			<Link to={LinkHref}>
				<img
					className="block-date-text-card__image"
					src={src}
					alt="image"
				/>
				<p className="block-date-text-card__text">
					{data ? (
						<p className="block-date-text-card__date">{data}</p>
					) : (
						''
					)}
					{text}
				</p>
			</Link>
		</div>
	);
};

export default BlockDateTextCard;
