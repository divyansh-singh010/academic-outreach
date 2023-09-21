import React from 'react';
import SideLinkBar from './SideLinkBar';

const SideLinkBarCreator = (props) => {
	return (
		<div className='mt-4'>
			<ul className='list-group list-group-flush'>{props.linksData.map(SideLinkBar)}</ul>
		</div>
	);
};

export default SideLinkBarCreator;
