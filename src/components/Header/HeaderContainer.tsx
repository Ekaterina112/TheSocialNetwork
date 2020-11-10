import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {getAuthUserData} from '../redux/AuthReducer';


type AuthPropsType = MapDispatchPropsType & MapStatePropsType

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

export type MapStatePropsType = {
    isAuth: boolean,
    login: string | null
}

export  type MapDispatchPropsType = {
    getAuthUserData:()=>void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {getAuthUserData})(HeaderContainer);