import React from 'react';
import './ScheduleMeetingButton.css';

const ScheduleMeetingButton = ({ onClick }) => {
  return (
    <>
    <button className="schedule-button" onClick={onClick}>
      Schedule a Meeting
    </button>
    <br />
    <br/>
    </>

  );
}

export default ScheduleMeetingButton;
