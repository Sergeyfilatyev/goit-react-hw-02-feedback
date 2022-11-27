import { Notification } from 'components/Notification/Notification';
import s from './Statistics.module.css';
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return total ? (
    <ul className={s.list}>
      <li className={s.item}>good: {good}</li>
      <li className={s.item}>neutral: {neutral}</li>
      <li className={s.item}>bad: {bad}</li>
      <li className={s.item}>total: {total}</li>
      <li className={s.item}>positive percentage: {positivePercentage} %</li>
    </ul>
  ) : (
    <Notification message={'There is no feedback'} />
  );
}
