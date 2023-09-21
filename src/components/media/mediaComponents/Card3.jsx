import React from 'react';

function Card3(props) {
	return (
		<div>
			<div className='card mb-2 mt-1 shadow-2 zoom col-12'>
				<div className='row g-0'>
					<div className='col-md p-1'>
						<div className='card-body'>
							<h5 className='card-title'>{props.date}</h5>
							<p className='card-text'>{props.content}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function createCard3(props) {
	return <Card3 date={props.date} content={props.content} />;
}

export default createCard3;
