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
    <div>
      {showRoom ? (
        <Room />
      ) : (
        <>
          <button className="schedule-button" onClick={handleClick}>
            Schedule a Meeting
          </button>
          <br />
          <br/>
        </>
      )}
    </div>
  );
}

export default ScheduleMeetingButton;
