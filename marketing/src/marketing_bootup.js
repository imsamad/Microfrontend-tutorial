import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';
// Mount function to start up the app

const mount = (el, ref) => {
  // const { onNavigate } = ref;
  const history = ref.defaultHistory || createMemoryHistory();

  if (!!ref?.onNavigate) history.listen(ref.onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: newPathName }) {
      const { pathname } = history.location;
      if (newPathName !== pathname) history.push(newPathName);
    },
  };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
