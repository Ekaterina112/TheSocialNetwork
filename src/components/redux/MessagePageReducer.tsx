import {
    ActionTypes,
    MessagePageType,
    PostDataType,
    SendMessageActionType,
    UpDateNewMessageTextActionType
} from './state';

const UP_DATE_NEW_MESSAGE_TEXT= 'UP-DATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE= 'SEND-MESSAGE'


const messageReducer=(state: MessagePageType, action:ActionTypes) => {

   if (action.type === 'UP-DATE-NEW-MESSAGE-TEXT') {
       state.newMessageText=action.body
    } else if (action.type === 'SEND-MESSAGE') {
        let body= state.newMessageText
        state.newMessageText = " "
        state.messageData.push({id:6, message:body})
    }
    return state
}
export const sendMessageCreator = ():SendMessageActionType =>({type:'SEND-MESSAGE'})
export const upDateNewMessageTextCreator = (b:string):UpDateNewMessageTextActionType => ({
    type:'UP-DATE-NEW-MESSAGE-TEXT', body:b})


export default messageReducer