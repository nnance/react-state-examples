import { AppState } from "./app";

export type Counter = number;

export type CounterActions = {
  autoIncriment: (value: Counter) => void;
  incriment: (value: Counter) => void;
  decriment: (value: Counter) => void;
};

const incriment = (value: Counter) => (state: AppState) => ({...state, counter: state.counter + value});

export const counterActions = (setState: React.Dispatch<React.SetStateAction<AppState>>): CounterActions => ({
  autoIncriment: value => {
    setInterval(() => setState(incriment(value)), 1000);
  },
  incriment: value => setState(incriment(value)),
  decriment: value => setState((state: AppState) => ({...state, counter: state.counter - value})),
});
