import { Counter, CounterAction, CounterActionType, counterReducer } from "./counter";
import { Message, MessageAction, MessageActionType, messageReducer } from "./message";

export type AppState = {
    counter: Counter,
    message: Message
}

const initialState = {
    counter: 100,
    message: "Started"
}

export const reducer = (state = initialState, action: CounterAction | MessageAction) => {
    return action.type in CounterActionType
    ? {
        ...state,
        counter: counterReducer(state.counter, action as CounterAction)
    }
    : action.type in MessageActionType
    ? {
        ...state, 
        message: messageReducer(state.message, action as MessageAction)
    }
    : state
}