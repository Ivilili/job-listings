import React from 'react';
import Card from './Card';

function Main({ filteredData, filters, handleClick, removeFilter, removeAllFilters }) {
	return (
		<main className="main">
			{filters.length > 0 && (
				<div className="filter">
					{filters.map((tag) => (
						<div className="filter-body">
							<span className="filter-tag">{tag}</span>
							<img
								src={'../images/icon-remove.svg'}
								alt="remove fiter tag"
								className="remove-filter-tag"
								onClick={() => removeFilter(tag)}
							/>
						</div>
					))}
					<button className="clear-btn" onClick={removeAllFilters}>
						Clear
					</button>
				</div>
			)}
			{filteredData.length === 0 ? (
				<p className="loader" />
			) : (
				filteredData.map((card) => {
					return <Card card={card} key={card.id} handleClick={handleClick} />;
				})
			)}
		</main>
	);
}

export default Main;
