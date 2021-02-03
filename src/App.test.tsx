import React from 'react';
import MainApp from './App';
import ReactDOM from 'react-dom';

test('renders app', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MainApp/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
