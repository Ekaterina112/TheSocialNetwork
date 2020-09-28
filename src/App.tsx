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
import store, {ActionTypes, RootStateType, StoreType} from './components/redux/state';

type PropsType = {
    state: RootStateType
    dispatch: (action:ActionTypes) => void
    store: StoreType
}


const App = (props: PropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
           <Nav/>
           <div className='app-wrapper-all'>
               <Route path ='/dialogs' render={()=> <Dialogs store={store}  messagePage={props.state.messagePage} />}/>
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
