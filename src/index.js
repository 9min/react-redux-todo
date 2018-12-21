import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from './reducers';
import rootStore from './store';
import App from './components/App';

// const store = createStore(rootReducer);
const store = createStore(rootStore);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
