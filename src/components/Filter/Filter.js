import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

import TextField from '@material-ui/core/TextField';

class Filter extends Component {
  componentWillUnmount() {
    this.props.resetFilter();
  }

  render() {
    const { filter, onChange } = this.props;

    return (
      <TextField
        className={styles.input}
        type="text"
        value={filter}
        onChange={onChange}
        label="Find contacts by name"
        size="small"
        variant="outlined"
      />
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired,
};

export default Filter;
