import { Component } from 'react';
import './index.css';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm.js';
import ContactList from './components/ContactList/ContactList.js';
import Filter from './components/Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  deleteContact = id => {
    const { state } = this;
    const filteredContacts = state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: filteredContacts });
  };

  updateContacts = (name, number) => {
    const { state } = this;
    const { contacts } = state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts list!`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...contacts, { id: nanoid(), name, number }],
        };
      });
    }
  };

  updateFilter = value => {
    this.setState({ filter: value });
  };

  filterArr = arrayToFilter => {
    const { filter } = this.state;
    return arrayToFilter.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const { updateContacts, updateFilter, filterArr, deleteContact } = this;

    return (
      <>
        <div className="code__title">
          <a
            className="code__link"
            href="https://github.com/dairedo7/react-assignment-phonebook"
          >
            Project's original code
          </a>
        </div>
        <div className="phonebook__container">
          <h1 className="phonebook__title">Phonebook</h1>
          <ContactForm changeContactsState={updateContacts} />

          <h2 className="contacts__title">Contacts</h2>
          <Filter nameToFilter={filter} updateFilter={updateFilter} />
          <ContactList
            contacts={filterArr(contacts)}
            deleteContact={deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
