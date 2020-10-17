import React, {ChangeEvent} from 'react';
import {upDateNewMessageTextCreator, sendMessageCreator,} from '../redux/MessagePageReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootStateType} from '../redux/types';
import {Dispatch} from 'redux';


/*const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { () => {
            const onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            const onNewMessageChange = (messageText:string) => {
                store.dispatch(upDateNewMessageTextCreator(messageText))
            }
         return   <Dialogs
                upDateNewMessageText={onNewMessageChange}
                sendMessage={onSendMessageClick}
                messagePage={store.getState().messagePage}/>
        }
    }
    </StoreContext.Consumer>
}*/


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
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer