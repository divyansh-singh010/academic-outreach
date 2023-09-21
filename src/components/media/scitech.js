import React from 'react';

import SideLinkBarCreator from '../../commons/SideLinkBarCreator';
import createScitechCard from './mediaComponents/Scitech';
import Title from '../../commons/Title';
import './media.css';
import news from '../../data/scitech.json';
import linksData from '../../data/media_leftlinks.json';

function scitech() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='News Media' />
					{news.map(createScitechCard)}
				</div>
			</div>
		</div>
	);
}

export default scitech;
