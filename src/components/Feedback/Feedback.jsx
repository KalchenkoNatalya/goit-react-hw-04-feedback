import css from '../Feedback/Feedback.module.css'
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.wrapButton}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={css.btn}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};


FeedbackOptions.propTypes = {
options: PropTypes.array,
onLeaveFeedback: PropTypes.func,

}