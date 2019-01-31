import React, { Component } from 'react';
import './App.css';
import ThankYouPage from './ThankYouPage.js';
import ProgressBarLabel from './ProgressBarLabel.js';
import DonatePage from './DonatePage.js';
import fakeAPIData from './fakeAPIData.json';
import SecondaryButtons from './SecondaryButtons.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: {}, campaign: {} };
    this.handleDonation = this.handleDonation.bind(this);
  }

  handleDonation(donationTotal) {
    let newAmount = this.state.campaign.amountRaised + donationTotal;
    let currentUser = this.state.currentUser;
    let campaign = this.state.campaign;
    this.setState({
      currentUser: { ...currentUser, hasDonated: true },
      campaign: { ...campaign, amountRaised: newAmount },
    });
  }

  componentDidMount() {
    //I don't want to read my fake API data every time componentDidMount is called
    //So that I can mimic an update when the user donates instead
    if (!Object.keys(this.state.currentUser).length) {
      this.setState(fakeAPIData);
    }
  }

  render() {
    const campaign = this.state.campaign;
    const currentUser = this.state.currentUser;
    const percentOfGoalMet = Object.keys(campaign).length
      ? Math.min(100, (100 * campaign.amountRaised) / campaign.targetAmount)
      : 0;
    const amountRemaining = Math.max(
      0,
      campaign.targetAmount - campaign.amountRaised
    );
    return (
      <div className="App">
        <ProgressBarLabel amountRemaining={amountRemaining} />
        {currentUser.hasDonated ? (
          <ThankYouPage percentOfGoalMet={percentOfGoalMet} />
        ) : (
          <DonatePage
            percentOfGoalMet={percentOfGoalMet}
            handleDonation={this.handleDonation}
            campaign={campaign}
          />
        )}
        <SecondaryButtons />
      </div>
    );
  }
}

export default App;
