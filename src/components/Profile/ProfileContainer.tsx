import React, {ComponentType} from 'react';
import '../../App.css';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {getStatus, getUserProfile, updateStatus} from '../redux/ProfilePageReducer';
import {UserProfileType} from '../redux/types';
import Preloader from '../common/Preloader';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirectComponent} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


//типы входных данных описать
type UsersProfilePropsType = MapDispatchPropsType & MapStatePropsType
type PathParamType = {
    userId: string,
}


type CommonUsersProfilePropsType = RouteComponentProps<PathParamType> & UsersProfilePropsType

class ProfileContainer extends React.Component<CommonUsersProfilePropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 12000
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
        return this.props.profile
            ?
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
            : <Preloader/>
    }
}

export type MapStatePropsType = {
    profile: null | UserProfileType
    status: string
}

export  type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status:string) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

/*//.........3.........................2.......................1
let AuthRedirectComponent = WithAuthRedirectComponent(ProfileContainer)
//ОБЕРТКА, ЗАКИДЫВАЕТ ДАННЫЕ ИЗ УРЛА
//................5.....................4...............3
let WithURLDataContainerComponent = withRouter(AuthRedirectComponent)
//.....................................6.......................................................................................................5
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent)*/



export default compose<ComponentType>(connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    WithAuthRedirectComponent)
(ProfileContainer)
