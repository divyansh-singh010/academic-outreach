import React from 'react';

function Text() {
	return (
		<div className='mt-4'>
			<p class='text-justify mb-2 font mx-1' align='justify'>
				Please write to{' '}
				<a href='mailto:adoni@admin.iitd.ac.in' className='contrimail'>
					adoni@admin.iitd.ac.in
				</a>{' '}
				and{' '}
				<a href='mailto:acadoutreach@admin.iitd.ac.in' className='contrimail'>
					acadoutreach@admin.iitd.ac.in
				</a>{' '}
				with any help that you may be able to extend to the Outreach Office.
			</p>
			<p class='text-justify mb-2 font mx-1' align='justify'>
				Suggestions on how to strengthen outreach activities are also welcome.
			</p>
		</div>
	);
}

export default Text;
