import React from 'react';
function LatestNews(props) {
	return (
		<div className='card mb-2 mt-2 shadow-2 zoom newscard'>
			<div className='row g-0'>
				<div className='col-md-3 py-3 d-flex  justify-content-center'>
					<div className='embed-responsive embed-responsive-16by9 d-flex '>
						<img className='card-img' src={process.env.PUBLIC_URL + props.img} alt='Event_Image' />
					</div>
				</div>
				<div className='col-md-9 py-2 row'>
					<div className='card-body py-1'>
						<h5 className='card-title'>
							<b>{props.title}</b>
						</h5>
						<h6 className='card-text'>
							<b>{props.date}</b>
						</h6>
						<p className='card-text'>{props.content}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function createLatest_news(props) {
	return <LatestNews title={props.title} content={props.content} img={props.img} date={props.date} />;
}

export default createLatest_news;
