import React from 'react';

import './reporting-page.scss';
import HatLine from '../../components/hatLine/HatLine';
import LineComponent from '../../components/lineComponent/LineComponent';
import Image from '../../components/image/Image';

const ReportingPage = ({ className = '' }) => {
	return (
		<div className={className + ' reporting-page'}>
			<HatLine text="Отчётность" />
			<div className="reporting-page__wrapper">
				<h3 className="reporting-page__title">
					Название документа / лицензии / свидетельства
				</h3>
				<div className="reporting-page__photos">
					<Image
						className="reporting-page__photo"
						src="https://i.imgur.com/xE9IeFr.jpg"
					/>
					<Image
						className="reporting-page__photo"
						src="https://i.imgur.com/ZcRRSd8.jpg"
					/>
					<Image
						className="reporting-page__photo"
						src="https://i.imgur.com/zqrvG7e.jpg"
					/>
					<Image
						className="reporting-page__photo"
						src="https://i.imgur.com/sNwpb7O.jpg"
					/>
				</div>
				<LineComponent className="reporting-page__line" />
				<h3 className="reporting-page__title">
					Название документа / лицензии / свидетельства
				</h3>
				<div className="reporting-page__photos">
					<Image
						className="reporting-page__photo"
						src="https://i.imgur.com/qq6LSoP.jpg"
					/>
					<Image
						className="reporting-page__photo"
						src="https://i.imgur.com/v18ceK0.jpg"
					/>
					<Image
						className="reporting-page__photo"
						src="https://i.imgur.com/OF105d3.jpg"
					/>
				</div>
				<LineComponent className="reporting-page__line" />
			</div>
		</div>
	);
};

export default ReportingPage;
