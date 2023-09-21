import React from 'react';

function UpcomingEvents(props) {
	return (
		<div>
			<h5 className='card-title'>
				<b>{props.title}</b>
			</h5>
			<h6 className='card-text'>
				<b>{props.date}</b>
			</h6>
			<p className='card-text'>{props.content}</p>
			<hr></hr>
		</div>
	);
}

function createupcoming_events(props) {
	return <UpcomingEvents title={props.title} content={props.content} date={props.date} />;
}

export default createupcoming_events;
