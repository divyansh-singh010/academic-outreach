import React from 'react';
import './events.css';

function Card(props) {
	return (
		<div className='col-lg-2 col-md-6 cards-row m-0'>
				<div className='card program-card shadow p-0'>
					<img src={props.img} className='card-img-top program-card-img' alt='...' />
					<div className='card-body program-card-body'>
						<hr />
						<p className='card-text program-card-txt lh-1'>{props.cardText}</p>
						<div className='link'>
						<a className='registration' href='https://docs.google.com/forms/d/e/1FAIpQLSccwoU1f36Q7ojiC3DbvwJvC09b_O0gElYPr-7DB4REXsEedA/viewform?usp=sf_link' >Register Here!</a>
						</div>
					</div>
				</div>
		</div>
	);
}


function createCard(props) {
	return (
		<Card key={props.id} img={props.img} cardText={props.cardText} more={props.more} />

	)
}

export default createCard;
