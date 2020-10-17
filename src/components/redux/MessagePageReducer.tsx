import {
    ActionTypes,
    MessagePageType,
    PostDataType,
    SendMessageActionType,
    UpDateNewMessageTextActionType
} from './types';

const UP_DATE_NEW_MESSAGE_TEXT= 'UP-DATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE= 'SEND-MESSAGE'



let initialState: MessagePageType = {
    dialogItemsData: [
        {id: 1,name: 'Kate'},
        {id: 2,name: 'Tom'},
        {id: 3,name: 'Kristi'},
        {id: 4, name: 'Mike'},
        {id: 5, name: 'Jeny' }
    ],
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Well'},
        {id: 4, message: 'Good'},
        {id: 5, message: 'wOoOo'}
    ],
    newMessageText:''
}

const messageReducer=(state=initialState, action:ActionTypes) => {
    switch (action.type) {
        case 'UP-DATE-NEW-MESSAGE-TEXT': {
            return {
                ...state,
                newMessageText: action.body   //do deep copy only for elements which will be changed
            }
        }
        case 'SEND-MESSAGE': {
            let body = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, {id: 6, message: body}]
            }
        }
        default:
            return state //&&&&&&&&&&&&&&&&&&&&&&&&
    }
}
   /*if (action.type === 'UP-DATE-NEW-MESSAGE-TEXT') {
       state.newMessageText=action.body
    } else if (action.type === 'SEND-MESSAGE') {
        let body= state.newMessageText
        state.newMessageText = " "
        state.messageData.push({id:6, message:body})
    }
    return state}*/

export const sendMessageCreator = ():SendMessageActionType =>({type:'SEND-MESSAGE'})
export const upDateNewMessageTextCreator = (b:string):UpDateNewMessageTextActionType => ({
    type:'UP-DATE-NEW-MESSAGE-TEXT', body:b})


export default messageReducer