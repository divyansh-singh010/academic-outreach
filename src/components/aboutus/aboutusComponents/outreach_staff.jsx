import React from 'react';
import StaffCard from './outreach_staffCard';
import renu from '../../../media/renu.jpg';

function Staff() {
	return (
		<div class='row'>
			{/* <div class='col p-left'>{props.staffData.map(createStaffCard)}</div> */}
			{/* <div class='col-md-6 p-left'>
				<StaffCard
					name='Kuldeep Singh Verma'
					role='Jr. Office Assistant'
					contact='KuldeepSinghVerma@admin.iitd.ac.in'
					image={ksv}
				/>
			</div> */}
			<div class='col-md-6 p-right'>
				<StaffCard name='Renu Bala' role='Jr. Project Assistant (Admin)' contact='Academic Outreach' image={renu} />
			</div>
		</div>
	);
}

export default Staff;
