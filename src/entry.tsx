import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './app';
import reducer from './reducers/reducers';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(), // TODO: Add thunk-middleware
  )
  );
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
