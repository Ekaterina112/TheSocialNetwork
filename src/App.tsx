import React, {ComponentType, lazy, Suspense} from 'react';
import {compose} from 'redux';
import {connect, Provider} from 'react-redux';
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import Nav from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import LoginPage from './components/LoginPage/LoginPage';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {initializeApp} from './redux/appReducer';
import store, {AppStateType} from './redux/redux-store';
import Preloader from './components/common/Preloader';


const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component<any, any> {
    catchAllUnhandledErrors = () => {
        alert('Sorry, have error')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='/dialogs'
                               render={() => <Suspense fallback={<div>Загрузка...</div>}><DialogsContainer/>
                               </Suspense>}/>
                        <Route path='/profile/:userId?' render={() => <Suspense fallback={<div>Загрузка...</div>}>
                            <ProfileContainer/></Suspense>}/>
                        <Route render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>


        );
    }
}

// must have exact for Switch

type MapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App);


const MainApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default MainApp