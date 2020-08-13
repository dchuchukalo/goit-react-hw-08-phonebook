import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import MaterialAppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import { styled } from '@material-ui/core/styles';

const MyToolbar = styled(MaterialToolbar)({
  justifyContent: 'space-between',
  backgroundColor: 'olive',
});

const AppBar = ({ isAuthenticated }) => (
  <MaterialAppBar>
    <MyToolbar>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </MyToolbar>
  </MaterialAppBar>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
