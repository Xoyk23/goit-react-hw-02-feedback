import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  // countPositiveFeedbackPercentage = () => {
  //   Math.round(total / good);
  // };

  heandleFeedback = ({ currentTarget }) => {
    this.setState(prevState => ({
      [currentTarget.name]: prevState[currentTarget.name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;

    return (
      <Section title="Please, leave feedback">
        <FeedbackOptions
          handleFeedback={this.heandleFeedback}
          addGoodFeedBack={this.handleGoodFeedback}
        />
        <h2>Statistic: </h2>
        <p>Good: = {good}</p>
        <p>Neutral = {neutral}</p>
        <p>Bad = {bad}</p>
        <p>Total ={total}</p>
      </Section>
    );
  }
}

export default App;
