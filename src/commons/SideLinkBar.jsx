import React from 'react';
import { NavLink } from 'react-router-dom';

const SideLinkBar = (props) => {
	return (
		<React.Fragment>
			<li className='list-group-item p-3 mt-2 colorchange bordertop'>
				<NavLink
					className='colchange text-decoration-none active'
					to={props.path}
					style={({ isActive }) => ({
						color: isActive ? '#a31f34' : 'gray',
					})}
				>
					{props.name}
				</NavLink>
			</li>
		</React.Fragment>
	);
};
export default SideLinkBar;
