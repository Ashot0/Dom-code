import React from 'react';

import './fund-page.scss';
import HatLine from '../../components/hatLine/HatLine';

const FundPage = ({ className = '' }) => {
	const data = [
		{
			id: 1,
			address:
				'Смоленская обл, Краснинский район, д. Гусино, ул. Октябрьская, дом 28',
			yearOfConstruction: '1973',
			square: '3493,1',
		},
		{
			id: 2,
			address:
				'Смоленская обл, Краснинский район, д. Гусино, ул. Октябрьская, дом 29',
			yearOfConstruction: '1975',
			square: '3488,3',
		},
		{
			id: 3,
			address:
				'Смоленская обл, Краснинский район, д. Гусино, ул. Октябрьская, дом 30',
			yearOfConstruction: '1976',
			square: '3461,7',
		},
		{
			id: 4,
			address:
				'Смоленская обл, Краснинский район, д. Гусино, ул. Октябрьская, дом 31',
			yearOfConstruction: '1982',
			square: '3576,8',
		},
		{
			id: 5,
			address:
				'Смоленская обл, Краснинский район, д. Гусино, ул. Октябрьская, дом 32',
			yearOfConstruction: '1988',
			square: '4785,9',
		},
		{
			id: 6,
			address:
				'Смоленская обл, Краснинский район, д. Гусино, ул. Октябрьская, дом 43',
			yearOfConstruction: '1978',
			square: '3996,1',
		},
	];
	return (
		<div className={className + ' fund-page'}>
			<HatLine text="Жилищный фонд" />
			<div className="fund-page__wrapper">
				<h3 className="fund-page__title">
					Управляющая Компания ООО Ук «Дом» обслуживает на текущий
					момент более 5 многоквартирных домов.
				</h3>
				<table className="fund-page__table table">
					<thead>
						<tr>
							<th>#</th>
							<th>Адрес</th>
							<th>Год постройки</th>
							<th>Площадь</th>
						</tr>
					</thead>
					<tbody>
						{data.map((row) => (
							<tr key={row.id}>
								<td className="table__block">{row.id}</td>
								<td className="table__block">{row.address}</td>
								<td className="table__block">
									{row.yearOfConstruction}
								</td>
								<td className="table__block">{row.square}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default FundPage;
