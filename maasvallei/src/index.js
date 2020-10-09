import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'firebase/firestore';
import * as firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyCT2jDJJH-UH8PQ1rlQ7LiIy5rN1fyZlaI",
    authDomain: "praktijkwijzer-e621e.firebaseapp.com",
    databaseURL: "https://praktijkwijzer-e621e.firebaseio.com",
    projectId: "praktijkwijzer-e621e"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();