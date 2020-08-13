import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './LoginView.module.css';

import MaterialButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    const MyButton = styled(MaterialButton)({
      width: 'fit-content',
      backgroundColor: 'palegoldenrod',
      color: 'olive',
    });

    return (
      <div>
        <h1 className={styles.header}>Страница логина</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <TextField
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Почта"
          />

          <TextField
            className={styles.input}
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Пароль"
          />

          <MyButton type="submit">Войти</MyButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
