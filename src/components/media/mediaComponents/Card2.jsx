function Card2(props) {
	return (
		<div>
			<div className='card mb-2 mt-2 shadow-2 zoom'>
				<div className='row g-0'>
					<div className='col-md-8 p-2'>
						<div className='card-body'>
							<h5 className='card-title title-line-height'>{props.title}</h5>
							<p className='card-text'>{props.content}</p>
							<p className='card-text'>
								<a href={props.read_more} class='colchange text-decoration-none active' style={{ color: '#a31f34' }}>
									Read More
								</a>
							</p>
						</div>
					</div>
					<div className='col-md-4 p-3'>
						<h5 className='card-title title-line-height d-flex justify-content-center'>{props.date}</h5>
						<div class='embed-responsive embed-responsive-16by9 d-flex justify-content-center mt-2 mb-2'>
							<video class='embed-responsive-item img-fluid' controls>
								<source src={props.video} type='video/mp4' />
							</video>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function createCard2(props) {
	return (
		<Card2
			title={props.title}
			content={props.content}
			video={props.video}
			read_more={props.read_more}
			date={props.date}
		/>
	);
}

export default createCard2;
