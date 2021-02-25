import React, { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistic';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleGoodFeedback = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleBadFeedback = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  onLeaveFeedback = e => {
    console.log(e.target.name);

    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;

    return (
      <Section title="Please, leave feedback">
        <FeedbackOptions
          handleFeedback={this.onLeaveFeedback}
          addGoodFeedBack={this.handleGoodFeedback}
        />
        <Statistic good={good} neutral={neutral} bad={bad} total={total} />
      </Section>
    );
  }
}

export default App;
