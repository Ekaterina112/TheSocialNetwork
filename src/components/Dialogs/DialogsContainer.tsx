import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import MessagesItems from './MessagesItems/MessagesItems';
import DialogsItems from './DialogsItems/DialogsItems';
import {upDateNewMessageTextCreator, sendMessageCreator,} from '../redux/MessagePageReducer';
import {MessagePageType, StoreType} from '../redux/store';
import Dialogs from './Dialogs';

type DialogsPropsType = {
    store:StoreType
}


const DialogsContainer = (props: DialogsPropsType) => {
    let state =props.store.getState().messagePage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (body:any) => {
        props.store.dispatch(upDateNewMessageTextCreator(body))
    }
    return  <Dialogs
        upDateNewMessageText={onNewMessageChange}
        sendMessage={onSendMessageClick}
        messagePage={state}
    />
}
export default DialogsContainer