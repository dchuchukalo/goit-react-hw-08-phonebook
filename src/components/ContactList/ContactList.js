import React from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDelete={() => deleteContact(id)}
          />
        ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
