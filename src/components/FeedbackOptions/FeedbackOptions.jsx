const FeedbackOptions = ({ handleFeedback, addGoodFeedBack }) => {
  return (
    <div>
      <button type="button" name="good" onClick={handleFeedback}>
        Good
      </button>
      <button type="button" name="neutral" onClick={handleFeedback}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={handleFeedback}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
