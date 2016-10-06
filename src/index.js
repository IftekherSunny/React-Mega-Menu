import App                  from './App';
import React                from 'react';
import ReactDOM             from 'react-dom';

// Added stylesheet
require('./App.css');

// Rendering jsx when root element is found
if( document.getElementById('root') !== null) {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}