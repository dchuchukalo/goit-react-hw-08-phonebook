import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import { ToastContainer, Zoom } from 'react-toastify';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import styles from './ContactsView.module.css';
import 'react-toastify/dist/ReactToastify.css';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { items } = this.props;

    return (
      <>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <section className={styles.contactsSection}>
          {items.length > 1 && <Filter />}
          {items.length > 0 ? (
            <ContactList />
          ) : (
            <p>The contact list is empty. Please add a new contact.</p>
          )}
          <ToastContainer
            position="top-center"
            autoClose={2000}
            newestOnTop
            limit={3}
            transition={Zoom}
          />
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: contactsSelectors.getItems(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

ContactsView.propTypes = {
  items: PropTypes.array.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
