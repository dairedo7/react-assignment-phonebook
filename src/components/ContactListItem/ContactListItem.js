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

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};
