import schoolOutreachLogo from '../media/school_outreach_programs.png';
import collegeOutreachLogo from '../media/college_outreach_programs.png';
import communityOutreachLogo from '../media/community_outreach_programs.png';
import parliamentarianOutreachLogo from '../media/parliamentary_outreach_programs.png';

import SciTechImg from '../media/sts.png';
import StemImg from '../media/stem.png';
import ChangeMakersImg from '../media/cm_logo.png';
import CollegeOutreachImg from '../media/college_outreach_logo.jpeg';
import GripImg from '../media/grip.png';
import ParliamentaryImg from '../media/parliamentarian_outreach_logo.jpeg';

export const cardData = [
	{
		id: 1,
		img: schoolOutreachLogo,
		title: 'SCHOOL OUTREACH',
		more: '/programs/schooloutreach/sts',
		about: 'School Outreach',
		logos: [
			{
				id: 1,
				img: SciTechImg,
				name: 'Sci-Tech Spins',
				more: '/programs/schooloutreach/sts/',
			},
			{
				id: 2,
				img: StemImg,
				name: 'Stem Mentorship',
				more: '/programs/schooloutreach/stem/',
			},
			{
				id: 3,
				img: ChangeMakersImg,
				name: 'Sci-Tech Spins',
				more: '/programs/schooloutreach/changemaker/',
			},
		],
	},
	{
		id: 2,
		img: collegeOutreachLogo,
		more: '/programs/college/main',
		title: 'COLLEGE AND UNIVERSITY OUTREACH',
		about: 'College & University Outreach',
		logos: [
			{
				id: 1,
				img: CollegeOutreachImg,
				name: 'College Outreach',
				more: '/programs/college/main/',
			},
		],
	},
	{
		id: 3,
		img: communityOutreachLogo,
		more: '/programs/community/main/',
		title: 'COMMUNITY OUTREACH',
		about: 'Community Outreach',
		logos: [
			{
				id: 1,
				img: GripImg,
				name: 'Community Outreach',
				more: '/programs/community/grassroot/',
			},
		],
	},
	{
		id: 4,
		img: parliamentarianOutreachLogo,
		more: '/programs/parliamentary/main/',
		title: 'ENGAGEMENT WITH PARLIAMENTARIANS',
		about: 'Engagement with Parliamentarians',
		logos: [
			{
				id: 1,
				img: ParliamentaryImg,
				name: 'Engagement with Parliamentarians',
				more: '/programs/parliamentary/main',
			},
		],
	},
];
