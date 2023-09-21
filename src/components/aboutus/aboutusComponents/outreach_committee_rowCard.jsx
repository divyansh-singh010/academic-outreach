import React from 'react';

function RowDataCard(props) {
	return (
		<tr class='height'>
			<td>
				<i>{props.name}</i>
			</td>
			<td>{props.department}</td>
			<td>{props.post}</td>
		</tr>
	);
}

export default RowDataCard;
