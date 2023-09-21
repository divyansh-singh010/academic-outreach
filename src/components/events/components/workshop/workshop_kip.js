import React from 'react';
import SideLinkBarCreator from '../../../../commons/SideLinkBarCreator';
import Title from '../../../../commons/Title';
import linksData from './workshopLinksData.json';

function workshopKIP() {
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
									<h4 className='page-content-title'>Know India Program</h4>
									<p className='card-text-top'>
										The 59th KIP was organised in the Indian Institute of Technology Delhi on 23rd January 2020 (9:30 am
										to 2:00 pm). Total 40 participants from several countries i.e. Fiji, Guyana, Mauritius, Myanmar,
										South Africa, Sri Lanka, Suriname, Trinidad and Tobago interacted with Prof. Nandana Sengupta,
										Assistant Professor, School of Public Policy. They had visited three departments/School namely,
										Kusuma School of Biological Sciences, Department of Design and Department of Materials Science &
										Engineering.
									</p>
								</div>
							</div>
							<div className='col-md-3 p-2'>
								<div className='embed-responsive d-flex justify-content-center'>
									<img src='./KIP.jpeg' alt='event' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default workshopKIP;
