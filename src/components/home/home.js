import React from 'react';

import Title from '../../commons/Title';
import createLatest_news from './homeComponents/latest_news.jsx';
import createupcoming_events from './homeComponents/upcoming_events.jsx';
import news from '../../data/home_latestnews.json';
import news1 from '../../data/home_upcomingevents.json';
import './home.css';
import HomeCarousel from './homeComponents/HomeCarousel';
export default function home() {
	return (
		<div id='home-div'>
			<HomeCarousel />

			<div class='imtext'>
				<p align='justify'>
					The Academic Outreach Initiatives at the Indian Institute of Technology Delhi attempt at building meaningful
					interfaces with academic peers and the society at large. All outreach initiatives at the Institute are deeply
					informed by our obligations to both these communities. We use the outreach platform to share the results of
					our scientific work with different sections of the society, while also continuously learning and improvising
					on our own research queries, and methodologies, based on the feedback received from them.
				</p>
			</div>
			<div className='message'>
				<div className='eventslink-block'>
				<a className='events-link' href='https://academicoutreach.iitd.ac.in/events'>TO REGISTER FOR UPCOMING EVENTS CLICK HERE</a>
				</div>
			</div>

			<div className='row container-fluid newscontainer'>
				<div className='col-lg-8 newsdiv'>
					<Title header='Latest News' />
					{news.map(createLatest_news)}
				</div>
				<div className='col-lg newsrightdiv'>
					{/* <Title header='Featured Video' />
					<div className='text-center'>
						<div class='embed-responsive embed-responsive-16by9'>
							<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/WTBMyRR2qH4' allowfullscreen />
						</div>
						<br></br>
						<b>
							<h7>Institute Lecture</h7>
						</b>
						<p align='justify'>
							IIT Delhi Institute Lecture on 'Functional Imaging of the Human Brain: A Window into the Architecture of
							the Mind' by Prof. Nancy Kanwisher, Brain and Cognitive Science Department, MIT.
						</p>
					</div> */}
					<Title header='Upcoming Events' />
					{news1.map(createupcoming_events)}
				</div>
			</div>
		</div>
	);
}
