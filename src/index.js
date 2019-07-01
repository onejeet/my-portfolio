import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import './sass/style.scss';
import 'font-awesome/css/font-awesome.min.css';
import reducers from './reducers';

let myStore = createStore(reducers);

ReactDOM.render(
    <Provider store = {myStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

