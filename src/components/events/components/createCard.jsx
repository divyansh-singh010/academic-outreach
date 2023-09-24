import React from 'react';
import './events.css';

function CreateCard(props) {
	const imageBaseUrl='https://caic.iitd.ac.in';
	return (
		<div className='col-lg-2 col-md-6 cards-row m-0'>
			<a class='btn border-0 w-100 px-0' href={props.registration_link}>
				<div className='card program-card shadow p-0'>
					<div className='images'>
					<img src={`${imageBaseUrl}${props.image}`} className='card-img-top program-card-img' alt='...' />
					</div>
					<hr />
					<div className='card-body program-card-body'>
						<p className='card-text program-card-txt lh-1'>{props.description}</p>
					</div>
				</div>
			</a>
		</div>
	);
}

export default CreateCard;
