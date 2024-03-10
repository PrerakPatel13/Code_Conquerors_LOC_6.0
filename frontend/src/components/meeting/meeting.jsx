import React from 'react';
import './ScheduleMeetingButton.css';

const ScheduleMeetingButton = ({ onClick }) => {
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
