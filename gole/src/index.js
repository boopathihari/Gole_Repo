import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <GoogleOAuthProvider clientId="369088499996-k3qne6tl257dk1vkea5dvj5mohadsfhd.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
