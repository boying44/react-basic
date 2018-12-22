import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';
import reducer from './reducers/reducers';

const store = createStore(reducer);
// @ts-ignore
// TODO: Connect Redux store to inspector
// window.store = store;

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
}

renderApp();

// if (module.hot) {
//   module.hot.accept('./routes', () => {
//       routes = require<typeof RoutesModule>('./routes').routes;
//       renderApp();
//   });
// }
