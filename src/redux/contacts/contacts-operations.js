import axios from 'axios';
import contactsActions from './contacts-actions';

const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = contactsActions;

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

const addContact = newContact => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

export default { addContact, deleteContact, fetchContacts };
