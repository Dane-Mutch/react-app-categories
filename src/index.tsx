import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

import './index.scss';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
