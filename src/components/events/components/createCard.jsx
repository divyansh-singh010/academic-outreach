import React from 'react';
import './events.css';

function Card(props) {
	return (
		<div className='col-lg-2 col-md-6 cards-row m-0'>
			<a class='btn border-0 w-100 px-0' href={props.more}>
				<div className='card program-card shadow p-0'>
					<img src={props.img} className='card-img-top program-card-img' alt='...' />
					<div className='card-body program-card-body'>
						<hr />
						<p className='card-text program-card-txt lh-1'>{props.cardText}</p>
					</div>
				</div>
			</a>
		</div>
	);
}

function createCard(props) {
	return <Card key={props.id} img={props.img} cardText={props.cardText} more={props.more} />;
}

export default createCard;
