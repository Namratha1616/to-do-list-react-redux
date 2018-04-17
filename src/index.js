// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// //import { thunk } from 'react-thunk';
// import index from './js/index';
//
// import './index.css';
// import App from './js/components/App';
// import registerServiceWorker from './registerServiceWorker';
//
//
//
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store/index'
import App  from './js/components/App'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
