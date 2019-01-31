import React from 'react';
import './App.css';
import Progress from './Progress.js';

const ProgressBar = ({ percentOfGoalMet }) => {
  return (
    <div id="progressBar">
      <Progress percentOfGoalMet={percentOfGoalMet} />
    </div>
  );
};

export default ProgressBar;
