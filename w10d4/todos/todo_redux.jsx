import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './frontend/store/store';


document.addEventListener("DOMContentLoaded", function() {
    const store = configureStore;
    window.store = store;
    ReactDOM.render(<h1>TODO</h1>, document.getElementById('root'))

})