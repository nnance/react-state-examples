export type Message = string;

export enum MessageActionType {
  setMessage = 200
}

export type MessageAction = {
  type: MessageActionType;
  message: Message;
};

export type MessageActions = {
  setMessage: (message: Message) => void;
};

export const messageActions = {
  setMessage: (message: Message) => ({ type: MessageActionType.setMessage, message })
};

const initialState: Message = "";

export const messageReducer = (state = initialState, action: MessageAction) => {
  return action.type === MessageActionType.setMessage ? action.message : state;
};
