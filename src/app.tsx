import * as React from 'react';
import Component from './components/component';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/reducers';

const App = () => (
  <div>
    <Component />
  </div>
);

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

export default App;
