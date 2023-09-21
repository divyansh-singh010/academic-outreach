import React from 'react';
import TableRows from './outreach_committee_createRows';
import NewData from './../../../data/outreach_committee_dataNew.json';
import OldData from './../../../data/outreach_committee_dataOld.json';
function Table() {
	return (
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
							<h5>Academic Outreach Committee (2022-2023)</h5>
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
										<th scope='col'>Name</th>
										<th scope='col'>Department</th>
										<th scope='col'></th>
									</tr>
								</thead>
								<TableRows linksData={NewData} />
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
							<h5>Academic Outreach Committee (2021-2022)</h5>
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
										<th scope='col'>Name</th>
										<th scope='col'>Department</th>
										<th scope='col'></th>
									</tr>
								</thead>
								<TableRows linksData={OldData} />
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Table;
