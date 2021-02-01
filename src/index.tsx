import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';
import {Provider} from 'react-redux';



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


 /*export let rerenderEntireTree = () => {
     ReactDOM.render(<BrowserRouter>
             <Provider store={store}> {/!*!//оборачиваем провайдером и передаем store, created by store create*!/}
                <App/>
           </Provider>
       </BrowserRouter>,
       document.getElementById('root')
  );
 }*/

 /*rerenderEntireTree()*/ //do function 'connect'
/*store.subscribe(()=>{
     let state=store.getState
    rerenderEntireTree()}) *///need get state

