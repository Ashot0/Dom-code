import React from 'react';

import './text-block-float-image.scss';

import Image from '../image/Image';

import LineComponent from '../lineComponent/LineComponent';

const TextBlockFloatImage = ({
	className = '',
	src,
	text = '',
	title = '',
	date = '',
	views = '',
	imageTitle,
	imageText,
	line,
}) => {
	return (
		<div className={className + ' text-block-float-image'}>
			<p className="text-block-float-image__text">
				<div className="text-block-float-image__image-block">
					<Image
						className="text-block-float-image__image"
						src={src}
					/>
					{imageTitle ? (
						<p className="text-block-float-image__image-text">
							<p className="text-block-float-image__image-title">
								{imageTitle}
							</p>
							<p className="text-block-float-image__image-bottom-text">
								{imageText}
							</p>
						</p>
					) : (
						''
					)}
				</div>

				<p className="text-block-float-image__title">{title}</p>
				{date ? (
					<p className="text-block-float-image__date">
						<Image
							className="text-block-float-image__title-clock"
							src="https://i.imgur.com/t6c5YE6.png"
						/>
						{date}
					</p>
				) : (
					''
				)}
				{text}
			</p>
			{line ? (
				<LineComponent className="text-block-float-image__line" />
			) : (
				''
			)}
			{views ? (
				<p className="text-block-float-image__views">
					<Image className="" src="https://i.imgur.com/8kk0ydo.png" />
					{views}
				</p>
			) : (
				''
			)}
		</div>
	);
};

export default TextBlockFloatImage;
