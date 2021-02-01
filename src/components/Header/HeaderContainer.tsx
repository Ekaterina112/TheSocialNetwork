import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import { logout} from '../../redux/authReducer';


type AuthPropsType = MapDispatchPropsType & MapStatePropsType

class HeaderContainer extends React.Component<AuthPropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

export type MapStatePropsType = {
    isAuth: boolean,
    login: string | null
}

export  type MapDispatchPropsType = {
    logout:()=>void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer);