import React, {ComponentType} from 'react';
import '../../App.css';
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getStatus, getUserProfile, saveNewProfileData, savePhoto, updateStatus} from '../../redux/profilePageReducer';
import {UserProfileType} from '../../redux/types';
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
    refreshProfile() {
        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            //userId = 12000
            userId = this.props.currentUserId!
            //*
            //system redirect
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<CommonUsersProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return this.props.profile
            ?
            <Profile isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto}/>
            : <Preloader/>
    }
}

export type MapStatePropsType = {
    profile: null | UserProfileType
    status: string
    currentUserId: number | null,
    isAuth: boolean
}

export  type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (p: any) => void
    saveNewProfileData: (formData: any) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        currentUserId: state.auth.id,
        isAuth: state.auth.isAuth
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
        updateStatus,
        savePhoto, saveNewProfileData
    }),
    withRouter,
    WithAuthRedirectComponent)
(ProfileContainer)
//*В TypeScript постфикс ! удаляет null и undefined из типа выражения.
//
// Это полезно, когда вы знаете, по причинам, выходящим за пределы способности вывода TypeScript, что переменная, которая "could" будет null или undefined , на самом деле не является таковой.