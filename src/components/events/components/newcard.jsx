import React from 'react';
import './events.css';

function Newcard(props) {
	
	const imageBaseUrl='https://caic.iitd.ac.in';
	return (

		<div className='col-lg-2 col-md-6 cards-row m-0'>
				<div className='card program-card shadow p-0'>
					<div className='images'>
					<img src={`${imageBaseUrl}${props.image}`} className='card-img-top program-card-img' alt='...' />
					</div>
					<div className='card-body program-card-body'>
						<hr />
						<h2 className='card-title program-card-title'>{props.Title}</h2>
						<p className='card-text program-card-txt lh-1'>{props.description}</p>
						<div className='link_new'>
						<a className='registration_new' href={props.registration_link} >More</a>
						</div>
						<div className='link'>
						<a className='registration' href={props.registration_link} >Register Here!</a>
						</div>
					</div>
				</div>
		</div>
	);
}



export default Newcard;
