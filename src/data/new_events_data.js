import ileImg from '../media/IL_LOGO.png';
import caicImg from '../media/caic.png';
import workshopImg from '../media/workshop.png';
import talksImg from '../media/OUTREACHTALKS.png';

export const newData = [
	{
		id: 1,
		img: ileImg,
		more: '/events/ile',
		cardText: 'Institute Lectures of IIT Delhi.',
	},
	{
		id: 2,
		img: caicImg,
		more: 'https://caic.iitd.ac.in/',
		cardText:
			"The Co-curricular and Academic Interaction Council (CAIC) and its constituent bodies is a student-led initiative in the campus. One of its major events is the annual technical fest 'TRYST' where hundreds of college and university students from across the nation gather on IITD campus to discuss and debate over tech-topics and products.",
	},
	{
		id: 3,
		img: workshopImg,
		more: '/events/workshop',
		cardText:
			'The Institute organises academic workshops for school and college students. Due to the pandemic, we had to curtail the number of workshops we could organise, and also move to an online mode. You will find details of some of the workshops we have conducted in the last two years.',
	},
	{
		id: 4,
		img: talksImg,
		more: '/events/talks',
		cardText:
			'For some interesting Outreach Talks delivered by IIT Delhi faculty members, please click here. The topics have a wide range and have been highly appreciated by college and university students and teachers attending them.',
	},
];
