import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import ContactsPage from './views/ContactsPage';

const App = () => (
  <>
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={routes.contacts} component={ContactsPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
