import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { toast } from 'react-toastify';

import MaterialButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  notifyWarn = text => toast.warn(text);
  notifySuccess = text => toast.success(text);

  handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'number'
      ? this.setState({ [name]: value.replace(/[^\d-]/g, '') })
      : this.setState({ [name]: value });
  };

  isValidContact = newContact => {
    const name = newContact.name.toLowerCase();
    const { number } = newContact;
    const { items } = this.props;

    if (name === '' || number === '') {
      this.notifyWarn(`Please enter name and number`);
      return true;
    }

    if (items.find(contact => contact.name.toLowerCase() === name)) {
      this.notifyWarn(`${newContact.name} is already in contacts.`);
      return true;
    }
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = { ...this.state };
    if (!this.isValidContact(newContact)) {
      const { addContact } = this.props;

      addContact(newContact);
      this.notifySuccess('Added successfully');
      this.reset();
    }
  };

  render() {
    const { name, number } = this.state;

    const MyButton = styled(MaterialButton)({
      width: 'fit-content',
      backgroundColor: 'olive',
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: '2px 2px 3px 0px rgba(0, 0, 0, 0.25)',
    });

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <TextField
          className={styles.input}
          size="small"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          id={this.nameInputId}
          autoComplete="off"
        />

        <TextField
          size="small"
          label="Number"
          variant="outlined"
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          onChange={this.handleChange}
          id={this.numberInputId}
          autoComplete="off"
        />

        <MyButton type="submit">Add contact</MyButton>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default ContactForm;
