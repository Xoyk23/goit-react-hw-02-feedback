import React from 'react';
import PropTypes from 'prop-types';

import Notification from './Notification';

import styles from './Statistic.module.css';

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
          <h2 className={styles.title}>Statistic: </h2>
          <p className={styles.data}>Good: = {good}</p>
          <p className={styles.data}>Neutral = {neutral}</p>
          <p className={styles.data}>Bad = {bad}</p>
          <p className={styles.data}>Total = {total}</p>
          <p className={styles.data}>
            PositiveFeedbacks = {countPositivePercentage()} %
          </p>
        </>
      )}
    </>
  );
};

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistic;
