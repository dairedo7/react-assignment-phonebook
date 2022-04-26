import { PropTypes } from 'prop-types';
import ContactItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
export function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => {
        return (
          <ContactItem
            contact={contact}
            key={contact.name}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
