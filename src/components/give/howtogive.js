import React from 'react';

import SideLinkBarCreator from '../../commons/SideLinkBarCreator';
import Text2 from '../give/giveComponents/Text2';
import Title from '../../commons/Title';
import './give.css';
import linksData from '../../data/give_leftlinks.json';

function howtogive() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='How to give to Outreach' />
					<Text2 />
				</div>
			</div>
		</div>
	);
}

export default howtogive;
