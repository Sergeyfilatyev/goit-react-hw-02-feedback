import s from './Notification.module.css';
export function Notification({ message }) {
  return <p className={s.notification}>{message}</p>;
}
