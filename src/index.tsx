import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './components/redux/store';
import StoreContext, {Provider} from './StoreContext';


export let rerenderEntireTree = () => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App/>
                </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(()=>{
    let state=store.getState
    rerenderEntireTree()}) //need get state

