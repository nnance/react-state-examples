import React from "react";

export type Counter = number;

export type CounterActions = {
  autoIncriment: (value: Counter) => void;
  incriment: (value: Counter) => void;
  decriment: (value: Counter) => void;
};

export type CounterTupil = [Counter, CounterActions];

const incriment = (value: Counter) => (state: Counter) => state + value;

const counterActions = (setState: React.Dispatch<React.SetStateAction<Counter>>): CounterActions => ({
  autoIncriment: value => {
    setInterval(() => setState(incriment(value)), 1000);
  },
  incriment: value => setState(incriment(value)),
  decriment: value => setState((state: Counter) => state - value),
});

export const useCounter = (value: Counter = 100): CounterTupil => {
  const [counter, setCounter] = React.useState(value);
  const actions = counterActions(setCounter);
  return [counter, actions];
}