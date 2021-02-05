import React, {ComponentType, lazy, Suspense} from 'react';
import './App.css';
import Nav from './components/NavBar/NavBar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/LoginPage/LoginPage';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import store, {AppStateType} from './redux/redux-store';
import Preloader from './components/common/Preloader';
import {compose} from 'redux';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

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
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <section>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        </section>
                    </Suspense>
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

let AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App);


const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default MainApp