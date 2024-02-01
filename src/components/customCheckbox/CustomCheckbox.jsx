import React, { useState } from 'react';
import './custom-checkbox.scss'; // Подключаем стили

const CustomCheckbox = ({ text, className = '' }) => {
	const [isChecked, setChecked] = useState(false);

	const toggleCheckbox = () => {
		setChecked(!isChecked);
	};

	return (
		<div
			className={className + ' custom-checkbox'}
			onClick={toggleCheckbox}
		>
			<input type="checkbox" checked={isChecked} readOnly />
			<span className="checkmark"></span>
			<label className="checkmark__label">{text}</label>
		</div>
	);
};

export default CustomCheckbox;
