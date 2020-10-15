import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Users/Users';

type PropsType = {

}

const App = (props: PropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
           <Nav/>
           <div className='app-wrapper-all'>
               <Route path ='/dialogs' render={()=> <DialogsContainer/>}/>
               <Route path = '/profile' render={()=> <Profile />} />
               <Route path = '/users' render={()=><Users/>} />
               <Route path ='/news' render={()=> <News/>}/>
               <Route path ='/music' render={()=> <Music/>}/>
               <Route path ='/settings' render={()=> <Settings/>}/>
           </div>
        </div>
    );
}

export default App;
