import React from 'react';
import SideLinkBarCreator from '../../../../commons/SideLinkBarCreator';
import Title from '../../../../commons/Title';
import linksData from './insti_lecs_leftlinks.json';

function ileExpand() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='Institute Lectures' />
					<div className='page-content'>
						<h4 className='page-content-title'>Foundation Day</h4>
						<p className='page-content-content'>
							28th January marks the Foundation Day of IIT Delhi. On this day in 1959, the Government of India in
							collaboration with the British Government set up the Institute at what was then called the Delhi College
							of Engineering and Technology. The foundation stone was laid at Hauz Khas by Prince Philips, the Duke of
							Edinburgh.
						</p>
						<h4 className='page-content-title'>National Science Day</h4>
						<p className='page-content-content'>
							National Science Day is celebrated in India on 28 February every year to commemorate the 1928 discovery of
							the Raman Effect by the Indian physicist Sir. C. V. Raman. This discovery was critical in understanding
							the behavior of light in fluids, and in differentiating chemical structures. IIT Delhi invites some of the
							finest minds to talk on one of the most advanced, state-of-the-art scientific research on this day.
						</p>
						<h4 className='page-content-title'>Research Scholar's Day</h4>
						<p className='page-content-content'>
							The Research Scholars' Day is an annual event planned by the MTech and PhD students of IIT Delhi.
							Alongside other programs including short talks and poster presentations by students themselves, the
							Institute also organizes a talk by an eminent scholar on this day, which is well-attended by both students
							and faculty members from IIT Delhi and other educational institutions. The date of the event usually
							varies from one year to the other, depending on the semester teaching schedule.
						</p>
						<h4 className='page-content-title'>National Technology Day</h4>
						<p className='page-content-content'>
							National Technology Day on May 11 commemorates the achievements of scientists, engineers, and researchers
							of allied fields of science and technology. On this day in 1998, India successfully conducted three
							nuclear tests at the Indian Army's Pokhran Test Range in Rajasthan. IIT Delhi organizes a talk this day
							every year to highlight recent technological advancements, and to emphasize the ethical and social
							responsibilities of scientists and engineers.
						</p>
						<h4 className='page-content-title'>Institute Day</h4>
						<p className='page-content-content'>
							The Institute Day of IIT Delhi is celebrated on the 16th of August every year. The day marks the event
							when the Delhi College of Engineering was formally inaugurated on 17 August 1961 by Humayun Kabir,
							Minister of Scientific Research and Cultural Affairs. On this day, we invite leading researchers and
							professionals in the field of Science and Technology to deliver a talk.
						</p>
						<h4 className='page-content-title'>Teacher's Day</h4>
						<p className='page-content-content'>
							Dr. Sarvepalli Radhakrishnan's birthday is celebrated in India as Teachers' Day on 5 September every year.
							Dr. Radhakrishnan, who served as the first Vice President of India (1952-1962), and the second President
							of India (1962-1967) was also a renowned scholar and a teacher par excellence. IIT Delhi celebrates 5th
							September in remembrance of this great teacher, with an Institute Lecture centered around learning and
							pedagogy.
						</p>
						<h4 className='page-content-title'>National Engineer's Day</h4>
						<p className='page-content-content'>
							The National Engineer's Day is celebrated on 15th September, to mark the birth anniversary of the eminent
							engineer Mokshagundam Visvesvaraya. A civil engineer by profession, Visvesvaraya is famous for having
							designed a flood protection system for the city of Hyderabad. IIT Delhi remembers him with an institute
							lecture on any aspect of technology.
						</p>
						<h4 className='page-content-title'>Women's Day</h4>
						<p className='page-content-content'>
							8th March is celebrated globally as International Women's Day to recognize both achievements and struggles
							of women. IIT Delhi organizes an Institute Lecture on this day to celebrate the research and contributions
							of women scientists and academicians with the objective to inspire future generations to stride further
							despite the many hurdles girls and women still face in all aspects of life, whether at home, outside, or
							at their workplace.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ileExpand;
