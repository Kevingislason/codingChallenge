import React from 'react';

export default function ProgressBarLabel({ amountRemaining }) {
  return (
    <div id="progressBarLabelContainer">
      <div id="progressBarLabel">
        <strong>{amountRemaining}$</strong>
        <span> still needed for this project</span>
      </div>
      <span id="ProgressBarLabelArrow" />
    </div>
  );
}
