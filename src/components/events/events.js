import React from 'react';
import Title from '../../commons/Title';
import { cardData } from '../../data/events_data';
import { newData } from '../../data/new_events_data';
import createCard from './components/createCard';
import newcard from './components/newcard';

function events() {
	return (
		<div>
			<div className='program-title'>
				<Title header='Events' />
			</div>
			<div className='row programs-row'>{cardData.map(createCard)}</div>
			<div className='row programs-row'>{newData.map(newcard)}</div>
		</div>
	);
}

export default events;
