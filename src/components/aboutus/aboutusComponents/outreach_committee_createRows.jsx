import React from 'react';
import RowDataCard from './outreach_committee_rowCard';

function TableRows(props) {
	return <tbody>{props.linksData.map(RowDataCard)}</tbody>;
}

export default TableRows;
