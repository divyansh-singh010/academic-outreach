import React from 'react';

function Scitech(props) {
	return (
		<div>
			<div className='card mb-2 mt-2 shadow-2 zoom'>
				<div className='row g-0'>
					<div className='col-md-8 p-2'>
						<div className='card-body'>
							<h5 className='card-title title-line-height'>{props.title}</h5>
							<p className='card-text'>{props.content}</p>
							<p className='card-text'>
								<a href={props.read_more} class='colchange text-decoration-none active' style={{ color: '#a31f34' }}>
									Read More
								</a>
							</p>
						</div>
					</div>
					<div className='col-md-4 p-4'>
						<h5 className='card-title title-line-height move-right'>{props.date}</h5>
						<img src={props.img} class='card-img' alt='scitech'></img>
					</div>
				</div>
			</div>
		</div>
	);
}

function createScitechCard(props) {
	return (
		<Scitech
			title={props.title}
			content={props.content}
			img={props.img}
			read_more={props.read_more}
			date={props.date}
		/>
	);
}

export default createScitechCard;
