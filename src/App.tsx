import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import store from './components/redux/redux-store';
import {ActionTypes, RootStateType, StoreType} from './components/redux/store';

type PropsType = {
    store: StoreType
    state: RootStateType
    dispatch: (action:ActionTypes) => void

}


const App = (props: PropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
           <Nav/>
           <div className='app-wrapper-all'>
               <Route path ='/dialogs' render={()=> <Dialogs store={props.store}  messagePage={props.state.messagePage} />}/>
               <Route path = '/profile' render={()=> <Profile
                   profilePage={props.state.profilePage}
                   dispatch={props.dispatch}

               />} />
               <Route path ='/news' render={()=> <News/>}/>
               <Route path ='/music' render={()=> <Music/>}/>
               <Route path ='/settings' render={()=> <Settings/>}/>
           </div>
        </div>
    );
}

export default App;
