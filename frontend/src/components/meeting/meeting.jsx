// ScheduleMeetingButton.jsx
import React, { useState } from 'react';
import './ScheduleMeetingButton.css';
import Room from './Room';
import { Link } from 'react-router-dom';

const ScheduleMeetingButton = () => {
  const [showRoom, setShowRoom] = useState(false);

  const handleClick = () => {
    setShowRoom(true);
  };

  return (
    <div>
      {showRoom ? (
        <Room />
      ) : (
        <>
          <button className="schedule-button" onClick={handleClick}>
            Schedule a Meeting
          </button>
          <button className="schedule-button" onClick={handleClick}>
            <Link to="/notes">
            Notes
            </Link>
          </button>
          <br />
          <br/>
        </>
      )}
    </div>
  );
}

export default ScheduleMeetingButton;
