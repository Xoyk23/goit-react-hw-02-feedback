import React from 'react';
import PropTypes from 'prop-types';

import Notification from './Notification';

const Statistic = ({ good, neutral, bad, total }) => {
  const countPositivePercentage = () => {
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  return (
    <>
      {total === 0 ? (
        <Notification />
      ) : (
        <>
          <h2>Statistic: </h2>
          <p>Good: = {good}</p>
          <p>Neutral = {neutral}</p>
          <p>Bad = {bad}</p>
          <p>Total = {total}</p>
          <p>PositiveFeedbacks = {countPositivePercentage()} %</p>
        </>
      )}
    </>
  );
};

export default Statistic;
