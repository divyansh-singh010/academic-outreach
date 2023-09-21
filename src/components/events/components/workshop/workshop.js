import React from 'react';
import SideLinkBarCreator from '../../../../commons/SideLinkBarCreator';
import Title from '../../../../commons/Title';
import linksData from './workshopLinksData.json';

function workshop() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='Workshop' />
					<div className='page-content'>
						<h4 className='page-content-title'>About</h4>
						<p>
							The Institute organises academic workshops for school and college students. Due to the pandemic, we had to
							curtail the number of workshops we could organise, and also move to an online mode. You will find details
							of some of the workshops we have conducted in the last two years.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default workshop;
