import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class ThankYouPage extends Component {
  render() {
    return (
      <div>
        <div id="mainContainer">
          <ProgressBar percentOfGoalMet={this.props.percentOfGoalMet} />
          <p className="padded moveDown">Thank you for donating.</p>
          <p className="padded moveDown">We appreciate your support!</p>
        </div>
      </div>
    );
  }
}

export default ThankYouPage;
