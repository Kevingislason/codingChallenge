import React from 'react';

export default function Progress(props) {
  return (
    <div id="progressSoFar" style={{ width: `${props.percentOfGoalMet}%` }} />
  );
}
