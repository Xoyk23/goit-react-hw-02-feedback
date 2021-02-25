import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <div>
      <button
        className={styles.button}
        type="button"
        name="good"
        onClick={handleFeedback}
      >
        Good
      </button>
      <button
        className={styles.button}
        type="button"
        name="neutral"
        onClick={handleFeedback}
      >
        Neutral
      </button>
      <button
        className={styles.button}
        type="button"
        name="bad"
        onClick={handleFeedback}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
