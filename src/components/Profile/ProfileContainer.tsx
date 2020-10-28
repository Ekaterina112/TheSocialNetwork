import React from 'react';
import '../../App.css';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import { setUserProfile} from '../redux/ProfilePageReducer';
import {UserProfileType} from '../redux/types';
import Preloader from '../common/Preloader';


//типы входных данных описать
type UsersProfilePropsType = MapDispatchPropsType & MapStatePropsType

class ProfileContainer extends React.Component<UsersProfilePropsType> {
    componentDidMount() {
        //делать запросы тут
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                    this.props.setUserProfile(response.data)
                }
            )
    }

    render() {
        return this.props.profile ? <Profile {...this.props} profile={this.props.profile} /> : <Preloader/>
        }
}

export type MapStatePropsType = {
    // описываем, что возвращает MapStateToProps
    profile: null | UserProfileType
}

export  type MapDispatchPropsType = {
    // описываем, что возвращает MapDispatchToProps
    setUserProfile: (profile: UserProfileType) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile} }

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType >(mapStateToProps, {setUserProfile}) (ProfileContainer)