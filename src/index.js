import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< Updated upstream
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
import App from './components/App.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
>>>>>>> Stashed changes
  </React.StrictMode>,
  document.getElementById('root'),
);
