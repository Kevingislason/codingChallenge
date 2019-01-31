import React, { Component } from 'react';

class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { dollarAmount: '50' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ dollarAmount: event.target.value });
  }

  //In real life, would send an API request via axios or something
  //But instead we just set state in App.js with the handleDonation function
  handleSubmit(event) {
    event.preventDefault();
    let dollarAmount = parseInt(this.state.dollarAmount);
    this.props.handleDonation(dollarAmount);
  }

  render() {
    return (
      <div>
        <form id="donateForm" onSubmit={this.handleSubmit}>
          <span id="donateInputDollarSign">$</span>
          <input
            id="donateInput"
            type="text"
            value={this.state.dollarAmount}
            onChange={this.handleChange}
          />
          <button type="submit" id="donateButton">
            Give Now
          </button>
        </form>
        <a id="anchor" href="https://www.google.com">
          {this.state.dollarAmount
            ? `Why give ${this.state.dollarAmount}$?`
            : 'Why give?'}
        </a>
      </div>
    );
  }
}

export default DonateForm;
