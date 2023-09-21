import React from 'react';
import Title from '../../../../commons/Title';
import linksData from './insti_lecs_leftlinks.json';
import TableRows from '../../../programs/school/sts/sts_schedule_createRows';
import Table1Data from '../../../../data/sem2.json';
import Table2Data from '../../../../data/sem1.json';
import Table3Data from '../../../../data/sem1-2.json';
import SideLinkBarCreator from '../../../../commons/SideLinkBarCreator';

function stsSchedule() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='Sci-Tech Spins' />
					<div className='page-content'>
						<div className='space'>
							<div class='accordion' id='accordionPanelsStayOpenExample'>
								<div class='accordion-item '>
									<h2 class='accordion-header ' id='panelsStayOpen-headingOne'>
										<button
											class='accordion-button collapsed accordion-color active-color'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#panelsStayOpen-collapseOne'
											aria-expanded='false'
											aria-controls='panelsStayOpen-collapseOne'
										>
											<h5>Academic year (2021-2022) Sem-2</h5>
										</button>
									</h2>
									<div
										id='panelsStayOpen-collapseOne'
										class='accordion-collapse collapse'
										aria-labelledby='panelsStayOpen-headingOne'
									>
										<div class='accordion-body'>
											<table class='table table-hover table-bordered'>
												<thead className='rounded-2'>
													<tr class='bgcolor'>
														<th scope='col'>Lecture</th>
														<th scope='col'>Speaker</th>
														<th scope='col'>Date</th>
														<th scope='col'>Links</th>
													</tr>
												</thead>
												<TableRows linksData={Table1Data} />
											</table>
										</div>
									</div>
								</div>
								<div class='accordion-item'>
									<h2 class='accordion-header' id='panelsStayOpen-headingTwo'>
										<button
											class='accordion-button collapsed accordion-color active-color'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#panelsStayOpen-collapseTwo'
											aria-expanded='false'
											aria-controls='panelsStayOpen-collapseTwo'
										>
											<h5>Academic year (2021-2022) Sem-1</h5>
										</button>
									</h2>
									<div
										id='panelsStayOpen-collapseTwo'
										class='accordion-collapse collapse'
										aria-labelledby='panelsStayOpen-headingTwo'
									>
										<div class='accordion-body'>
											<table class='table table-hover table-bordered'>
												<thead className='rounded-2'>
													<tr class='bgcolor'>
														<th scope='col'>Lecture</th>
														<th scope='col'>Speaker</th>
														<th scope='col'>Date</th>
														<th scope='col'>Links</th>
													</tr>
												</thead>
												<TableRows linksData={Table2Data} />
											</table>
										</div>
									</div>
								</div>
								<div class='accordion-item'>
									<h2 class='accordion-header' id='panelsStayOpen-headingThree'>
										<button
											class='accordion-button collapsed accordion-color active-color'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#panelsStayOpen-collapseThree'
											aria-expanded='false'
											aria-controls='panelsStayOpen-collapseThree'
										>
											<h5>Academic year (2020-2021) Sem-1,2</h5>
										</button>
									</h2>
									<div
										id='panelsStayOpen-collapseThree'
										class='accordion-collapse collapse'
										aria-labelledby='panelsStayOpen-headingThree'
									>
										<div class='accordion-body'>
											<table class='table table-hover table-bordered'>
												<thead className='rounded-2'>
													<tr class='bgcolor'>
														<th scope='col'>Lecture</th>
														<th scope='col'>Speaker</th>
														<th scope='col'>Date</th>
														<th scope='col'>Links</th>
													</tr>
												</thead>
												<TableRows linksData={Table3Data} />
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default stsSchedule;
