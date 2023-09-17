import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signup from './components/Signup';
import Signin from './components/Signin';
import { useEffect } from 'react';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
  useEffect(() => {}, []);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path='/auth/signup'>
            <Signup onSignIn={onSignIn} />
          </Route>
          <Route path='/auth/signin'>
            <Signin onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
