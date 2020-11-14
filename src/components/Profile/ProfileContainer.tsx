import React from 'react';
import '../../App.css';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {getUserProfile} from '../redux/ProfilePageReducer';
import {UserProfileType} from '../redux/types';
import Preloader from '../common/Preloader';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirectComponent} from '../../hoc/withAuthRedirect';



//типы входных данных описать
type UsersProfilePropsType = MapDispatchPropsType & MapStatePropsType
type PathParamType = {
    userId: string,
}


type CommonUsersProfilePropsType = RouteComponentProps<PathParamType> & UsersProfilePropsType

class ProfileContainer extends React.Component<CommonUsersProfilePropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if(!userId){
            userId=2
        }
        this.props.getUserProfile(userId)

    }
    render() {

        return this.props.profile ? <Profile {...this.props} profile={this.props.profile}/> : <Preloader/>
    }
}

export type MapStatePropsType = {
    profile: null | UserProfileType

}

export  type MapDispatchPropsType = {
    getUserProfile:(userId:number)=>void
}
let AuthRedirectComponent= WithAuthRedirectComponent(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}
//ОБЕРТКА, ЗАКИДЫВАЕТ ДАННЫЕ ИЗ УРЛА
let WithURLDataContainerComponent = withRouter(AuthRedirectComponent)

// @ts-ignore
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent)