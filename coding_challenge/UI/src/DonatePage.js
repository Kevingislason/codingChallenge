import React from 'react';
import DonateForm from './DonateForm.js';
import ProgressBar from './ProgressBar.js';

export default function DonatePage({
  percentOfGoalMet,
  handleDonation,
  campaign,
}) {
  return (
    <div>
      <div id="mainContainer">
        <ProgressBar percentOfGoalMet={percentOfGoalMet} />
        <div className="padded">
          <p>
            <strong className="orangeRed">
              Only {campaign.daysRemaining} days{' '}
            </strong>
            left to fund this project.
          </p>
          <p>
            Join the {campaign.numberOfDonors} other donors who have already
            supported this project. Every dollar helps.
          </p>
          <DonateForm handleDonation={handleDonation} />
        </div>
      </div>
    </div>
  );
}
