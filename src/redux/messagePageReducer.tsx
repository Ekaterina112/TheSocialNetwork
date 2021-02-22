import {ActionTypes} from './types';


//types
export type MessageDataType = {
    message: string
    id: number
}
export type DialogItemDataType = {
    name: string
    id: number
}
export type MessagePageType = typeof initialState
//actions
const SEND_MESSAGE = 'messageReducer/SEND-MESSAGE'

let initialState = {
    dialogItemsData: [
        {id: 1, name: 'Kate'},
        {id: 2, name: 'Tom'},
        {id: 3, name: 'Kristi'},
        {id: 4, name: 'Mike'},
        {id: 5, name: 'Jeny'}
    ] as Array<DialogItemDataType>,
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Well'},
        {id: 4, message: 'Good'},
        {id: 5, message: 'wOoOo'}
    ] as Array<MessageDataType>,
}

const messageReducer = (state = initialState, action: ActionTypes): MessagePageType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messageData: [...state.messageData, {id: 7, message: action.newMessageBody}]
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody: string) => ({
    type: SEND_MESSAGE,
    newMessageBody
}) as const

export default messageReducer