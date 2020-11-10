import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUsersData, UsersAuthDataType} from '../redux/AuthReducer';
import {AppStateType} from '../redux/redux-store';
import { usersAPI} from '../../API/api';


type AuthPropsType = MapDispatchPropsType & MapStatePropsType

class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {
        usersAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUsersData(data.data)
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