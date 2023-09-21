import React from 'react';

import sts from '../../../media/scitechspins.jpeg';
import cm from '../../../media/change_makers.png';
import sm from '../../../media/stem_mentorship.png';
import ow from '../../../media/workshop_homepage.jpeg';
import ile from '../../../media/ile_hp.jpg';
import nep from '../../../media/nep_hp.jpg';
import gm from '../../../media/grip_home.png';
import dhruv from '../../../media/Dhruv_Roy.jpg';
import caic from '../../../media/caic_hp.jpeg';
import hod from '../../../media/hod_1.jpg';

const HomeCarouselItem = (props) => {
	return (
		<div class={props.active ? 'carousel-item active' : 'carousel-item'} data-bs-interval={props.interval}>
			<img src={props.img} class='d-block w-100 car-img img-responsive' alt='...' />
			<div class='carousel-caption d-none d-md-block'>
				<div class='slidetitle'>
					<h5 class='car-text'>{props.text}</h5>
				</div>
			</div>
		</div>
	);
};

const HomeCarousel = () => {
	return (
		<div id='HomeCarousel' class='carousel carousel-dark slide' data-bs-ride='carousel'>
			<div class='carousel-indicators'>
				<button
					type='button'
					data-bs-target='#HomeCarousel'
					data-bs-slide-to='0'
					class='active'
					aria-current='true'
					aria-label='Slide 1'
				></button>
				<button type='button' data-bs-target='#HomeCarousel' data-bs-slide-to='1' aria-label='Slide 2'></button>
				<button type='button' data-bs-target='#HomeCarousel' data-bs-slide-to='2' aria-label='Slide 3'></button>
				<button type='button' data-bs-target='#HomeCarousel' data-bs-slide-to='3' aria-label='Slide 4'></button>
				<button type='button' data-bs-target='#HomeCarousel' data-bs-slide-to='4' aria-label='Slide 5'></button>
				<button type='button' data-bs-target='#HomeCarousel' data-bs-slide-to='5' aria-label='Slide 6'></button>
				<button type='button' data-bs-target='#HomeCarousel' data-bs-slide-to='6' aria-label='Slide 7'></button>
				<button type='button' data-bs-target='#HomeCarousel' data-bs-slide-to='7' aria-label='Slide 8'></button>
				<button type='button' data-bs-target='#HomeCarousel' data-bs-slide-to='8' aria-label='Slide 9'></button>
				<button type='button' data-bs-target='#HomeCarousel' data-bs-slide-to='9' aria-label='Slide 10'></button>
			</div>
			<div class='carousel-inner'>
				<HomeCarouselItem active interval={'1000'} img={sm} text='STEM Mentorship Program' />
				<HomeCarouselItem interval={'3000'} img={sts} text='Sci Tech Spins' />
				<HomeCarouselItem interval={'3000'} img={cm} text='Change.Makers Program' />
				<HomeCarouselItem interval={'3000'} img={ow} text='Outreach Workshop for Research' />
				<HomeCarouselItem interval={'3000'} img={ile} text='Special Guest Lecture' />
				<HomeCarouselItem interval={'3000'} img={nep} text='Panel Discussion on National Education Policy' />
				<HomeCarouselItem interval={'3000'} img={gm} text='Grassroots Innovation Program' />
				<HomeCarouselItem interval={'3000'} img={caic} text='Co-Curricular and Academic Interaction Council' />
				<HomeCarouselItem interval={'3000'} img={hod} text='Sonipat_IITD Academic Outreach Day' />
				<HomeCarouselItem interval={'3000'} img={dhruv} text='Dhruv 2019' />
			</div>
			<button class='carousel-control-prev' type='button' data-bs-target='#HomeCarousel' data-bs-slide='prev'>
				<span class='carousel-control-prev-icon' aria-hidden='true'></span>
				<span class='visually-hidden'>Previous</span>
			</button>
			<button class='carousel-control-next' type='button' data-bs-target='#HomeCarousel' data-bs-slide='next'>
				<span class='carousel-control-next-icon' aria-hidden='true'></span>
				<span class='visually-hidden'>Next</span>
			</button>
		</div>
	);
};

export default HomeCarousel;
