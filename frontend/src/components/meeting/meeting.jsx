// ScheduleMeetingButton.jsx
import React, { useState } from 'react';
import './ScheduleMeetingButton.css';
import Room from './Room';

const ScheduleMeetingButton = () => {
  const [showRoom, setShowRoom] = useState(false);

  const handleClick = () => {
    setShowRoom(true);
  };

  return (
    <>
    <br />
    <br />
    <br />
    <button className="schedule-button" onClick={onClick}>
      Schedule <br/> Meeting
    </button>
    <button className="schedule-button" onClick={onClick}>
      Chat
    </button>
    <br />
    <br/>
    </>

  );
}

export default ScheduleMeetingButton;
