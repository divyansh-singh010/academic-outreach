import React, { useState, useEffect } from 'react';
import Title from '../../commons/Title';
import CreateCard from './components/createCard';
import Newcard from './components/newcard';
import axios from 'axios';
import { API_BASE } from '../../constants';
function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/outreach/upcomingevents/`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
		
      });
  }, []);
  return (
    <div>
      <div className='program-title'>
        <Title header='Upcoming Events'/>
      </div>
      <div className='row programs-row'>
	  {events.map(Newcard)}
      </div>
      <div className='program-title'>
        <Title header='Past Events'/>
      </div>
      <div className='row programs-row'>
        {events.map(CreateCard)}
      </div>
    </div>
  );
}

export default Events;
