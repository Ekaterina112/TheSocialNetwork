import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPosts} from './components/redux/state';
import {BrowserRouter} from 'react-router-dom';


export let rerenderEntireTree = (state:any) =>
{
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPosts={addPosts} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}