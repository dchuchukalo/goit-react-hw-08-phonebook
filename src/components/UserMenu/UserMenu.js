import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import styles from './UserMenu.module.css';

import Avatar from '@material-ui/core/Avatar';
import { styled } from '@material-ui/core/styles';

import MaterialButton from '@material-ui/core/Button';

const MyAvatar = styled(Avatar)({
  width: '32px',
  height: '32px',
  marginRight: '10px',
});

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.userMenu}>
    <MyAvatar className={styles.avatar} src={avatar} alt="" width="32" />
    <span className={styles.name}>Welcome, {name}</span>
    <MaterialButton type="button" onClick={onLogout}>
      Logout
    </MaterialButton>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
