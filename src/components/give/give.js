import React from 'react';

import Paragraph from '../give/giveComponents/Paragraph';
import Text from '../give/giveComponents/Text';
import Title from '../../commons/Title';
import './give.css';
import linksData from '../../data/give_leftlinks.json';
import SideLinkBarCreator from '../../commons/SideLinkBarCreator';

function give() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='Campaign' />
					<Paragraph />
					<Text />
				</div>
			</div>
		</div>
	);
}

export default give;
