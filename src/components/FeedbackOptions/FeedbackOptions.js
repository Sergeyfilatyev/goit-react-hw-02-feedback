import { nanoid } from 'nanoid';
import s from './FeedbackOtions.module.css';
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
