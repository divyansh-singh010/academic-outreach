import React from 'react';

import SideLinkBarCreator from '../../commons/SideLinkBarCreator';
import createCard3 from './mediaComponents/Card3';
import Title from '../../commons/Title';
import './media.css';
import pressData from '../../data/press_release.json';
import linksData from '../../data/media_leftlinks.json';

function press() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9 '>
					<Title header='Press Release' />
					{pressData.map(createCard3)}
				</div>
			</div>
		</div>
	);
}

export default press;
