import React, {ChangeEvent} from 'react';
import {upDateNewMessageTextCreator, sendMessageCreator,} from '../redux/MessagePageReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';




const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState().messagePage
            const onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            const onNewMessageChange = (messageText:string) => {
                store.dispatch(upDateNewMessageTextCreator(messageText))
            }
         return   <Dialogs
                upDateNewMessageText={onNewMessageChange}
                sendMessage={onSendMessageClick}
                messagePage={state}/>
        }
    }
    </StoreContext.Consumer>
}
export default DialogsContainer