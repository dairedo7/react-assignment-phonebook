import { PropTypes } from 'prop-types';
import styles from './ContactItem.module.css';
export default function ContactItem({ contact, deleteContact }) {
  const { name, id, number } = contact;
  return (
    <li className={styles.contact__item}>
      <span className={styles.contact__text}>
        {name}: {number}
      </span>
      <button className={styles.delete__btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

ContactItem.prtopTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
  }),
};
