import React, {ComponentType} from 'react';
import {upDateNewMessageTextCreator, sendMessageCreator,} from '../redux/MessagePageReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {MessagePageType, RootStateType} from '../redux/types';
import {compose, Dispatch} from 'redux';
import {WithAuthRedirectComponent} from '../../hoc/withAuthRedirect';
import {AppStateType} from '../redux/redux-store';



export type MapStatePropsType = {
    // описываем, что возвращает MapStateToProps
    messagePage: MessagePageType
}

export  type MapDispatchPropsType = {
    // описываем, что возвращает MapDispatchToProps
    upDateNewMessageText: (messageText: string) => void,
    sendMessage: () => void
}

let mapStateToProps = (state:RootStateType):MapStatePropsType => {
    return {messagePage: state.messagePage}
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        upDateNewMessageText: (messageText: string) => {
            dispatch(upDateNewMessageTextCreator(messageText))},
                sendMessage: () => {dispatch(sendMessageCreator())}
        }
    }
/*//............3...........................2..............1
let AuthRedirectComponent =WithAuthRedirectComponent(Dialogs)
//.......................................4.....................................3
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)*/
//почему в одних скобках?????
//2 параметром целевая



export default compose<ComponentType>(connect <MapStatePropsType, MapDispatchPropsType, {}, AppStateType> (mapStateToProps, mapDispatchToProps), WithAuthRedirectComponent)(Dialogs)