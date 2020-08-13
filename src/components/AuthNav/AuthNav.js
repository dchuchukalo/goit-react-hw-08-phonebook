import React from 'react';
import MyNavLink from '../MyNavLink';
import styles from './AuthNav.module.css';

import MaterialButton from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(MaterialButton)({
  padding: '0',
});

const AuthNav = () => (
  <div className={styles.authNav}>
    <MyButton>
      <MyNavLink to="/register" exact>
        Регистрация
      </MyNavLink>
    </MyButton>
    <MyButton>
      <MyNavLink to="/login" exact>
        Логин
      </MyNavLink>
    </MyButton>
  </div>
);

export default AuthNav;
