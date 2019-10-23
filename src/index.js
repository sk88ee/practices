import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/modules';
import "./index.css";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, 
    document.getElementById('root')
    );
//registerServiceWorker();