import React from 'react';
import './line-component.scss';

const LineComponent = ({ className, dots }) => {
	return (
		<div className={className + ' line-component'}>
			<div className="line-component__line"></div>
			{dots ? (
				<div className="line-component__dots">
					<div className="line-component__dot line-component__dot_active"></div>
					<div className="line-component__dot"></div>
					<div className="line-component__dot"></div>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default LineComponent;
