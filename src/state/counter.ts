export type Counter = number;

export enum CounterActionType {
    incriment = 100,
    decriment
};

export type CounterAction = { type: CounterActionType, number: number };

const initialState: Counter = 0;

export const counterReducer = (state = initialState, action: CounterAction) => {
    return action.type === CounterActionType.incriment
    ? ++state
    : action.type === CounterActionType.decriment
    ? --state
    : state
}
