import { Component } from 'react';
import { PropTypes } from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  render() {
    const { contacts, nameToFilter, deleteContact } = this.props;
    
    return (
      <ul className={styles.list}>
        {contacts
          .filter(({name}) => name.toLowerCase().includes(nameToFilter.toLowerCase()))
          .map(contact => {
            return (
              <ContactItem contact={contact} key={contact.name} deleteContact={deleteContact} />
            );
          })}
      </ul>
    );
  }
}

export default ContactList;