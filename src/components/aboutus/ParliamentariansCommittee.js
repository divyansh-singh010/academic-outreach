import React from 'react';
import SideLinkBarCreator from '../../commons/SideLinkBarCreator';
import Table from './aboutusComponents/parliamentarians_committee_table';
import Title from '../../commons/Title';
import Paragraph from './aboutusComponents/parliamentarians_committee_text';
import './aboutus.css';
import linksData from '../../data/aboutus_leftlinks.json';

function ParliamentariansCommittee() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='Committee for Engagement with Parliamentarians' />
					{/* {news.map(createCard2)} */}
					<Paragraph />
					<Table />
				</div>
			</div>
		</div>
	);
}

export default ParliamentariansCommittee;
