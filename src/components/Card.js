import React, { Fragment } from 'react';

const Card = ({ card, handleClick }) => {
	const tags = [ card.role, card.level, ...card.languages, ...card.tools ];
	return (
		<Fragment>
			<div className={`card ${card.featured && 'featured-active'}`} key={card}>
				<img src={card.logo} className="card-image" alt={card.company} />
				<div className="card-body">
					<span className="card-company">
						{card.company}
						{card.new && <span className="card-tag-new">New!</span>}
						{card.featured && <span className="card-tag-featured">Featured</span>}
					</span>
					<h2 className="title">{card.position}</h2>
					<p className="card-desc">
						<span>{card.postedAt}</span> · <span>{card.contract}</span> · <span>{card.location}</span>
					</p>
				</div>
				<div className="card-labels">
					{tags.map((tag) => {
						return (
							<span onClick={() => handleClick(tag)} key={tag}>
								{tag}
							</span>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default Card;
