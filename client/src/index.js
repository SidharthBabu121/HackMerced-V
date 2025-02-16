import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Sentry.init({dsn: "https://02063ea440e24ddc8c1eb4f50c2888bf@sentry.io/1473298"});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
