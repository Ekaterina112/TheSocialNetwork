import React from 'react';
import './App.css';
import Nav from './components/NavBar/NavBar';
import {Route} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './LoginPage/LoginPage';
import {connect} from 'react-redux';
import {initializeApp} from './components/redux/appReducer';
import {AppStateType} from './components/redux/redux-store';
import Preloader from './components/common/Preloader';


type PropsType = {}

class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-all'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>


        );
    }
}

type MapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})
//need types!!!
export default connect(mapStateToProps, {initializeApp})(App);
