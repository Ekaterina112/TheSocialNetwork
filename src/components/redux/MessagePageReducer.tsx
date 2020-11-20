import {
    ActionTypes,
    MessagePageType,
    SendMessageActionType,
} from './types';
import {v1} from 'uuid';
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
}

const messageReducer=(state=initialState, action:ActionTypes) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            return {
                ...state,
                messageData: [...state.messageData, {id: v1(), message: action.newMessageBody}]
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody:string):SendMessageActionType =>({type:'SEND-MESSAGE',newMessageBody})

export default messageReducer