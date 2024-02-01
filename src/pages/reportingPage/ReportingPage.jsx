import React from 'react';

import './reporting-page.scss';
import HatLine from '../../components/hatLine/HatLine';
import LineComponent from '../../components/lineComponent/LineComponent';
import Image from '../../components/image/Image';
import Source1 from './../../assets/reportingPage/1.jpg';
import Source2 from './../../assets/reportingPage/2.jpg';
import Source3 from './../../assets/reportingPage/3.jpg';
import Source4 from './../../assets/reportingPage/4.jpg';
import Source5 from './../../assets/reportingPage/5.jpg';
import Source6 from './../../assets/reportingPage/6.jpg';
import Source7 from './../../assets/reportingPage/7.jpg';

const ReportingPage = ({ className = '' }) => {
	return (
		<div className={className + ' reporting-page'}>
			<HatLine text="Отчётность" />
			<div className="reporting-page__wrapper">
				<h3 className="reporting-page__title">
					Название документа / лицензии / свидетельства
				</h3>
				<div className="reporting-page__photos">
					<Image className="reporting-page__photo" src={Source1} />
					<Image className="reporting-page__photo" src={Source2} />
					<Image className="reporting-page__photo" src={Source3} />
					<Image className="reporting-page__photo" src={Source4} />
				</div>
				<LineComponent className="reporting-page__line" />
				<h3 className="reporting-page__title">
					Название документа / лицензии / свидетельства
				</h3>
				<div className="reporting-page__photos">
					<Image className="reporting-page__photo" src={Source5} />
					<Image className="reporting-page__photo" src={Source6} />
					<Image className="reporting-page__photo" src={Source7} />
				</div>
				<LineComponent className="reporting-page__line" />
			</div>
		</div>
	);
};

export default ReportingPage;
