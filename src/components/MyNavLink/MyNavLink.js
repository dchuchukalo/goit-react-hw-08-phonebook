import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MyNavLink.module.css';

const MyNavLink = props => (
  <NavLink
    className={styles.navLink}
    activeClassName={styles.activeNavLink}
    {...props}
  ></NavLink>
);

export default MyNavLink;
