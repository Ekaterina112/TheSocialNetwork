import React, {ChangeEvent} from 'react';
import {upDateNewMessageTextCreator, sendMessageCreator,} from '../redux/MessagePageReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootStateType} from '../redux/types';
import {Dispatch} from 'redux';
import {WithAuthRedirectComponent} from '../../hoc/withAuthRedirect';


let mapStateToProps = (state:RootStateType) => {
    return {messagePage: state.messagePage}
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        upDateNewMessageText: (messageText: string) => {
            dispatch(upDateNewMessageTextCreator(messageText))},
                sendMessage: () => {dispatch(sendMessageCreator())}
        }
    }

let AuthRedirectComponent =WithAuthRedirectComponent(Dialogs)
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)

export default DialogsContainer