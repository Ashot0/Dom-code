import React, { useState, useEffect } from 'react';

import './scroll-to-top-button.scss';

import Image from '../image/Image';

const ScrollToTopButton = ({ className }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;
			setIsVisible(scrollTop > 300);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div className={className + ' scroll-to-top-button'}>
			{isVisible && (
				<div className="scroll-to-top-btn show" onClick={scrollToTop}>
					<Image src="https://i.imgur.com/Wnupu8C.png" />
				</div>
			)}
		</div>
	);
};

export default ScrollToTopButton;
