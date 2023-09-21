import React from 'react';
import SideLinkBarCreator from '../../../../commons/SideLinkBarCreator';
import Title from '../../../../commons/Title';
import linksData from './workshopLinksData.json';

function workshopDhruv() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='Workshop' />
					<div className='page-content'>
						<div className='row g-0'>
							<div className='col-md-8 p-5 row align-items-center text-right'>
								<div className='card-body'>
									<h4 className='page-content-title'>Dhruv</h4>
									<p className='card-text-top'>
										A year after Prime Minister Narendra Modi visited the Sirius Centre for Gifted Education in Sochi on
										Russian President Vladimir Putin's invite, a similar project is set to get underway in India at the
										PM's suggestion. Now Central Government is planning with The Union Human Resource Development (HRD)
										ministry and the Prime Minister's Science, Technology and Innovation Advisory Council (PM-STIAC) are
										coordinating the programme to set up a Centre of Excellence for gifted children in India. In this
										line, The Ministry of Human Resources Development has launched DHRUV a pilot project under Pradhan
										Mantri Innovative Learning Programme (PMLIP) in October- as part of its 100-day governance agenda.
									</p>
								</div>
							</div>
							<div className='col-md-3 p-2'>
								<div className='embed-responsive d-flex justify-content-center'>
									<img src='./dhruv.png' alt='event' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default workshopDhruv;
