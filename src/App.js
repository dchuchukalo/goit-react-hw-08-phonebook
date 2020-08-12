import React, { lazy, Suspense, Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "ContactsView" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "LoginView" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterView" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <Route exact path="/">
              <Redirect to={routes.login} />
            </Route>
            <PrivateRoute
              path={routes.contacts}
              component={ContactsView}
              redirectTo={routes.login}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginView}
            />
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.contacts}
              component={RegisterView}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
