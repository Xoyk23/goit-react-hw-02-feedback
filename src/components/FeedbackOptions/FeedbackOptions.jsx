import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ handleFeedback, addGoodFeedBack }) => {
  return (
    <div>
      <button type="button" onClick={addGoodFeedBack}>
        Good
      </button>
      <button type="button" onClick={handleFeedback}>
        Neutral
      </button>
      <button type="button" onClick={handleFeedback}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
