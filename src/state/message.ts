export type Message = string;

export enum MessageActionType {
    setMessage
}

export type MessageAction = {
    type: MessageActionType,
    message: Message
}

const initialState: Message = "";

export const messageReducer = (state = initialState, action: MessageAction) => {
    return action.type === MessageActionType.setMessage
    ? action.message
    : state
}