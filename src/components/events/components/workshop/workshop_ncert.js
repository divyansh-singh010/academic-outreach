import React from 'react';
import SideLinkBarCreator from '../../../../commons/SideLinkBarCreator';
import Title from '../../../../commons/Title';
import linksData from './workshopLinksData.json';

function workshopNCERT() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='Workshop' />
					<div className='page-content'>
						<div class='row'>
							<div className='card-body' class='col'>
								<h4 className='page-content-title'>NCERT</h4>
								<p className='card-text-top'>
									Inauguration: Prof. Rajendra S. Dhaka (Convener of the event) welcomed all the students to this
									nurturance program for NTSE awardees. He briefed by the program schedule along with other important
									instructions. Prof. Santanu Roy (Dean academics, IIT Delhi) inaugurated the nurturance program with
									his opening remarks. He congratulated all the awardees and suggested all to interact with the
									speakers. Further, Prof. Pritha Chandra Associate dean (outreach activities) talked about
									interdisciplinary related important points, which will benefit the students beyond the school days.
									Then, Prof. R. S. Dhaka thanked dean academics and his office for their help in order to put up this
									program in short time. Towards the end, Prof. Gulfam from NCERT talked about details of NTSE scheme
									and the nurturance program.
								</p>
							</div>
							<div className='embed-responsive d-flex justify-content-center' class='col'>
								<img src='../../../media/KIP.jpeg' alt='event' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default workshopNCERT;
