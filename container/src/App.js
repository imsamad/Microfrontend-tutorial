import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Header from './components/Header';
import Progress from './components/Progress';

const AuthApp = lazy(() => import('./components/AuthApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header
          signedIn={isSignIn}
          onSignOut={() => {
            //
            setIsSignIn(false);
          }}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route
              path='/auth'
              component={() => <AuthApp onSignIn={() => setIsSignIn(true)} />}
            />
            <Route path='/' component={MarketingApp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
