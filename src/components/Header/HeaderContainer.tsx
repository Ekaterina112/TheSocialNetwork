import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUsersData, UsersAuthDataType} from '../redux/AuthReducer';
import {AppStateType} from '../redux/redux-store';


type AuthPropsType = MapDispatchPropsType & MapStatePropsType

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUsersData(response.data.data)
                }
            })
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
    setAuthUsersData: (data: UsersAuthDataType) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setAuthUsersData})(HeaderContainer);