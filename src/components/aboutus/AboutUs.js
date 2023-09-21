import React from 'react';
import SideLinkBarCreator from '../../commons/SideLinkBarCreator';
import Text from './aboutusComponents/aboutus_text';
import Title from '../../commons/Title';
import './aboutus.css';
import linksData from '../../data/aboutus_leftlinks.json';

function AboutUs() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='About Us' />
					<Text />
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
