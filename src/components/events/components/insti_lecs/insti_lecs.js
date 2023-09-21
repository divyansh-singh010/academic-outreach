import React from 'react';
import SideLinkBarCreator from '../../../../commons/SideLinkBarCreator';
import Title from '../../../../commons/Title';
import linksData from './insti_lecs_leftlinks.json';

function ile() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='Institute Lectures' />
					<div className='page-content'>
						<h4 className='page-content-title' id='#sample-link'>
							About
						</h4>
						<p className='page-content-content'>
							<ul>
								<li>
									IIT Delhi regularly organizes Institute Lectures by leading national and international scholars,
									professionals, world leaders and intellectuals who have made significant contributions to academia and
									society. The lectures cater to a wider intellectual audience on the campus, as well as those from the
									neighboring academic institutions. The primary goal is not just to keep abreast of advanced research
									happening world over, but also to initiate dialogues with research students and colleagues in other
									academic institutions.
								</li>
								<br></br>
								<li>
									Typically, 12 Institute Lectures are organized in any academic year. The list of selected speakers is
									prepared by the Institute Lecture Committee, which mostly works with nominations proposed by different
									academic units in IITD. Due to prevailing conditions, the lectures are held online. We will move back
									to the physical mode as and when conditions change. Some Institute Lectures are held on pre-determined
									dates. You can find more information on these here.
								</li>
							</ul>
							<a href='/events/ileExpand'>Read More</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ile;
