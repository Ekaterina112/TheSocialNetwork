import React from 'react';
import s from './Dialogs.module.css'
import MessagesItems from './MessagesItems/MessagesItems';
import DialogsItems from './DialogsItems/DialogsItems';
import {RootStateType, MessagePageType} from '../redux/state';

type PropsType = {
    messagePage: MessagePageType
}


const Dialogs = (props: PropsType) => {
    let dialogArr = props.messagePage.dialogItemsData.map((d) => <DialogsItems name={d.name} id={d.id}/>)
    let messageArr = props.messagePage.messageData.map((m) => <MessagesItems message={m.message}/>)

    let newMessage= React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        let mess = newMessage.current?.value;
        alert(mess)
    }
    return (
        <div className={s.allDialogs}>
            <div className={s.dialogs}>
                {dialogArr}
            </div>
            <div className={s.messages}>
                {messageArr}
            </div>
            <div>
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>add</button>
            </div>
        </div>
    )
}
export default Dialogs