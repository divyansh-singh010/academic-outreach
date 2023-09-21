import React from 'react';
import SideLinkBarCreator from '../../commons/SideLinkBarCreator';
import Staff from './aboutusComponents/outreach_staff';
import Title from '../../commons/Title';
import './aboutus.css';
import linksData from '../../data/aboutus_leftlinks.json';

function staff() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='Outreach Staff' />
					<Staff />
				</div>
			</div>
		</div>
	);
}

export default staff;
