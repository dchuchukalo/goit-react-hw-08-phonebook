import contactsActions from './contacts-actions';
import { createReducer, combineReducers } from '@reduxjs/toolkit';

const {
  fetchContactsSuccess,
  fetchContactsError,
  addContactSuccess,
  addContactError,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  resetFilter,
} = contactsActions;

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
  [resetFilter]: () => '',
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  error,
});
