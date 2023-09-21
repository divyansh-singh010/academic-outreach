import React from 'react';

function Title(props) {
	return (
		<div /*style={{ backgroundColor: '#fff' }}*/ className='mt-4 mb-2 shadow-2 rounded-2'>
			<h2 className='title' align='center'>
				{props.header}
			</h2>
		</div>
	);
}
export default Title;
