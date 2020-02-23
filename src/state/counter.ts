export type Counter = number;

export enum CounterActionType {
    incriment = 100,
    decriment
};

export type CounterAction = { type: CounterActionType, number: number };

export const CounterActions = {
    incriment: (value: number) => ({ type: CounterActionType.incriment, number: value }),
    decriment: (value: number) => ({ type: CounterActionType.decriment, number: value })
}

const initialState: Counter = 0;

export const counterReducer = (state = initialState, action: CounterAction) => {
    return action.type === CounterActionType.incriment
    ? ++state
    : action.type === CounterActionType.decriment
    ? --state
    : state
}
