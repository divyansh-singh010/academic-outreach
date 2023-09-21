import React from 'react';
import SideLinkBarCreator from '../../../../commons/SideLinkBarCreator';
import Title from '../../../../commons/Title';
import linksData from './insti_lecs_leftlinks.json';
function nomination() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='Institute Lectures' />
					<div className='page-content'>
						<p className='page-content-content'>
							Names of potential speakers can be initiated by an academic unit of the Institute, and must be submitted
							for consideration through the Departmental Faculty Board to the Chairperson and the Convenor of the
							Institute Lecture Series Committee. I Requests for physical Institute Lectures should be made typically
							three months prior to the proposed date of the lecture. For online Institute Lectures, requests have to be
							made at least one month prior to the proposed date.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default nomination;
