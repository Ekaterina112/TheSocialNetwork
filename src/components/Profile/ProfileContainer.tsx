import React from 'react';
import '../../App.css';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {setUserProfile} from '../redux/ProfilePageReducer';
import {UserProfileType} from '../redux/types';
import Preloader from '../common/Preloader';
import {RouteComponentProps, withRouter} from 'react-router-dom';


//типы входных данных описать
type UsersProfilePropsType = MapDispatchPropsType & MapStatePropsType
type PathParamType = {
    userId: string
}


type CommonUsersProfilePropsType = RouteComponentProps<PathParamType> & UsersProfilePropsType

class ProfileContainer extends React.Component<CommonUsersProfilePropsType> {
    componentDidMount() {
        //делать запросы тут
        let userId = Number(this.props.match.params.userId)
        debugger
        if(!userId){
            userId=2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                    this.props.setUserProfile(response.data)
                }
            )
    }
    render() {
        return this.props.profile ? <Profile {...this.props} profile={this.props.profile}/> : <Preloader/>
    }
}

export type MapStatePropsType = {
    profile: null | UserProfileType
}

export  type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}
//ОБЕРТКА, ЗАКИДЫВАЕТ ДАННЫЕ ИЗ УРЛА
let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent)