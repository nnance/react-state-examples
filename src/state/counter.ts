export type Counter = number;

export enum CounterActionType {
  incriment = 100,
  decriment
}

export type CounterAction = { type: CounterActionType; number: number };

export type CounterActions = {
  incriment: (value: Counter) => void;
  decriment: (value: Counter) => void;
};

export const counterActions = {
  incriment: (number: Counter) => ({ type: CounterActionType.incriment, number }),
  decriment: (number: Counter) => ({ type: CounterActionType.decriment, number })
};

const initialState: Counter = 0;

export const counterReducer = (state = initialState, action: CounterAction) => {
  return action.type === CounterActionType.incriment
    ? ++state
    : action.type === CounterActionType.decriment
    ? --state
    : state;
};
