import React from 'react';

function StaffCard(props) {
	return (
		<div class='card mb-3'>
			<div class='row no-gutters'>
				<div class='col-4'>
					<div className='p-staff-card'>
						<img src={props.image} class='card-img' alt='staff_image'></img>
					</div>
				</div>
				<div class='col-8 pt-3 center-text'>
					<h5 class='card-title pt-2'>{props.name}</h5>
					<p class='card-text pt-2'>{props.role}</p>
					<p class='card-text'>
						<small class='text-muted'>{props.contact}</small>
					</p>
				</div>
			</div>
		</div>
	);
}

export default StaffCard;
