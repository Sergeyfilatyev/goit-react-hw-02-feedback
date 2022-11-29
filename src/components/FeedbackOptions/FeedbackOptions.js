import { nanoid } from 'nanoid';
import s from './FeedbackOtions.module.css';
import PropTypes from 'prop-types';
export function FeedbackOptions({ options, clickHandler }) {
  return (
    <div className={s.box}>
      {options.map(feedback => (
        <button
          className={s.btn}
          onClick={clickHandler}
          key={nanoid()}
          type="button"
          data-feedback={feedback}
        >
          {feedback}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  optons: PropTypes.array,
  clickHandler: PropTypes.func.isRequired,
};
