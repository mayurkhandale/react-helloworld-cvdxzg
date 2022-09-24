import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
// ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
