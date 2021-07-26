import React, {ComponentType, lazy, Suspense} from 'react';
import {compose} from 'redux';
import {connect, Provider} from 'react-redux';
import {HashRouter, Redirect, Route, Switch, withRouter, Link} from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import LoginPage from './components/LoginPage/LoginPage';
import UsersContainer from './components/Users/UsersContainer';
import {initializeApp} from './redux/appReducer';
import store, {AppStateType} from './redux/redux-store';
import Preloader from './components/common/Preloader';
import {Layout, Menu} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";
import HeaderContainer from "./components/Header/HeaderContainer";



const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const ChatPage = lazy(() => import('./pages/chatPage/chatPage'));

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
            <Layout>
                <Header className="header" style={{backgroundColor: '#ffff', lineHeight: '5vh'}}>
                    <HeaderContainer/>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="Profile">
                                <Menu.Item key="1"><Link to='/profile'>Profile</Link></Menu.Item>
                                <Menu.Item key="2"><Link to='/dialogs'>Messages</Link></Menu.Item>
                                <Menu.Item key="3">Settings Profile</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Users">
                                <Menu.Item key="5"> <Link to='/users'>Users</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined/>} title="...in progress">
                                <Menu.Item key="9"> <Link to='/chat'>Chat</Link></Menu.Item>
                                <Menu.Item key="10"> <Link to='/news'>News</Link></Menu.Item>
                                <Menu.Item key="11"> <Link to='/settings'>Settings</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                                <Route path='/users' render={() => <UsersContainer/>}/>
                                <Route path='/news' render={() => <News/>}/>
                                <Route path='/chat'
                                       render={() => <Suspense fallback={<div>Загрузка...</div>}><ChatPage/>
                                       </Suspense>}/>
                                <Route path='/settings' render={() => <Settings/>}/>
                                <Route path='/login' render={() => <LoginPage/>}/>
                                <Route path='/dialogs'
                                       render={() => <Suspense fallback={<div>Загрузка...</div>}><DialogsContainer/>
                                       </Suspense>}/>
                                <Route path='/profile/:userId?'
                                       render={() => <Suspense fallback={<div>Загрузка...</div>}>
                                           <ProfileContainer/></Suspense>}/>
                                <Route render={() => <div>404 NOT FOUND</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
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
