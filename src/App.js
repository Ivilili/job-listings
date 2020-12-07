import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.scss';

function App() {
	const [ data, setData ] = useState([]);
	const [ filters, setFilters ] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = () => {
		fetch('data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			}
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setData(res);
			});
	};

	const filtered = ({ role, level, languages, tools }) => {
		const tags = [ role, level ];
		if (languages) tags.push(...languages);
		if (tools) tags.push(...tools);

		return filters.every((filter) => tags.includes(filter));
	};

	const handleClick = (tag) => {
		return filters.find((filter) => filter === tag) ? null : setFilters([ ...filters, tag ]);
	};

	const removeFilter = (selected) => {
		setFilters(filters.filter((value) => value !== selected));
	};

	const removeAllFilters = () => {
		setFilters([]);
	};

	const filteredData = data.filter(filtered);

	return (
		<Fragment>
			<Header />
			<Main
				filteredData={filteredData}
				key={data.id}
				filters={filters}
				handleClick={handleClick}
				removeFilter={removeFilter}
				removeAllFilters={removeAllFilters}
			/>
		</Fragment>
	);
}

export default App;
