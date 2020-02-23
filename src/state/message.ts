export type Message = string;

export enum MessageActionType {
    setMessage = 200
}

export type MessageAction = {
    type: MessageActionType,
    message: Message
}

export const MessageActions = {
    setMessage: (message: string) => ({ type: MessageActionType.setMessage, message })
}

const initialState: Message = "";

export const messageReducer = (state = initialState, action: MessageAction) => {
    return action.type === MessageActionType.setMessage
    ? action.message
    : state
}