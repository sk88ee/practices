import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { createStore } from 'redux';
import rootReducer from './store/modules';
import "./index.css";

const store = createStore(rootReducer);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();