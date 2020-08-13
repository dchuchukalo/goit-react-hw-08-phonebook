import React from 'react';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MaterialButton from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(MaterialButton)({
  backgroundColor: 'olive',
  fontSize: '10px',
  color: 'rgba(0, 0, 0, 0.87)',
  boxShadow: '2px 2px 3px 0px rgba(0, 0, 0, 0.25)',
  padding: '2px 8px',
});

const MyListItem = styled(ListItem)({
  padding: '8px 0 8px 10px',
  borderBottom: '1px solid olive',
  display: 'inline-block',
});

const ContactItem = ({ name, number, onDelete }) => (
  <MyListItem className={styles.item}>
    <ListItemText className={styles.info}>{name}:</ListItemText>
    <ListItemText className={styles.info}>{number}</ListItemText>
    <ListItemSecondaryAction>
      <MyButton className={styles.delete} onClick={onDelete} type="button">
        Delete
      </MyButton>
    </ListItemSecondaryAction>
  </MyListItem>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
