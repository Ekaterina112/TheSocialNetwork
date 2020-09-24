import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store, { RootStateType} from './components/redux/state';


export let rerenderEntireTree = () => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPosts={store.addPosts.bind(store)}
                 upDateNewPostText={store.upDateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)

