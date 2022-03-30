import styles from './ContactForm.module.css';
import {PropTypes} from 'prop-types';
import { Component } from 'react';

const INITIAL_FORM_STATE = { name: '', number: '' };

class ContactForm extends Component {
    static propTypes = { changeContactsState: PropTypes.func.isRequired };

    state = { name: '', number: '' };
    

    resetForm = () => {
        this.setState(INITIAL_FORM_STATE);
    }

    handleChange = ({ target }) => {
        const { name, value } = target;

        this.setState({ [name]: value })
        console.log({ [name]: value });
    }



    handleSubmit = evt => {
        evt.preventDefault();
        const { state } = this;
        
        this.props.changeContactsState(state.name, state.number);

        this.resetForm();
    }

    render() {
        const { name, number } = this.state;

        return (
        <form className={styles.form} onSubmit={this.handleSubmit} action="#">
            <label className={styles.label} htmlFor="name">
                Name: 
            </label>
                <input
                className={styles.form__field}
                type="text"
                id="name"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Enter your name"
                value={name}
                onChange={this.handleChange}
                required
                />
      
            <label className={styles.label} htmlFor="number">
                Number: 
            </label>
                <input
                className={styles.form__field}
                type="tel"
                id="number"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="Enter your number"
                value={number}
                onChange={this.handleChange}
                required
                />
           
            
            <button className={styles.submit__btn} type="submit">
                Add contact
            </button>
        </form>
        )
        
    }
}

export default ContactForm;