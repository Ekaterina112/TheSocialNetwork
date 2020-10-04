import React, {ChangeEvent} from 'react';
import {upDateNewMessageTextCreator, sendMessageCreator,} from '../redux/MessagePageReducer';
import {StoreType} from '../redux/store';
import Dialogs from './Dialogs';

type DialogsPropsType = {
    store:StoreType
}


const DialogsContainer = (props: DialogsPropsType) => {
    let state =props.store.getState().messagePage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (messageText:string) => {
        props.store.dispatch(upDateNewMessageTextCreator(messageText))
    }
    return  <Dialogs
        upDateNewMessageText={onNewMessageChange}
        sendMessage={onSendMessageClick}
        messagePage={state}
    />
}
export default DialogsContainer