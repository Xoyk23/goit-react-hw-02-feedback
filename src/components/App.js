import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <section>
        <h2>Please, leave feedback</h2>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <h2>Statistic: </h2>
        <p>Good: = {this.state.good}</p>
        <p>Neutral = {this.state.neutral}</p>
        <p>Bad = {this.state.bad}</p>
      </section>
    );
  }
}

export default App;
