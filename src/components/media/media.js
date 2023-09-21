import React from 'react';

import SideLinkBarCreator from '../../commons/SideLinkBarCreator';
import createCard2 from './mediaComponents/Card2';
import Title from '../../commons/Title';
import './media.css';
import news from '../../data/media';
import linksData from '../../data/media_leftlinks.json';
function media() {
	return (
		<div className='container-fluid min-vh-100'>
			<div className='row'>
				<div className='col-lg-3'>
					<SideLinkBarCreator linksData={linksData} />
				</div>
				<div className='col-lg-9'>
					<Title header='News Media' />
					{news.map(createCard2)}
				</div>
			</div>
		</div>
	);
}

export default media;
