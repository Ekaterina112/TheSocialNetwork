import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store, { RootStateType} from './components/redux/store';


export let rerenderEntireTree = () => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 store={store}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(()=>{
    let state=store.getState
    rerenderEntireTree()}) //need get state

