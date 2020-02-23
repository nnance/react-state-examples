import React from "react";
import { Actions, AppState } from "./app";
import { Counter } from "./counter";
import { Message } from "./message";

const incriment = (value: Counter) => (state: AppState) => ({...state, counter: state.counter + value});
const decriment = (value: Counter) => (state: AppState) => ({...state, counter: state.counter - value});
const setMessage = (message: Message) => (state: AppState) => ({...state, message});

export const applyMiddleware = (setState: React.Dispatch<React.SetStateAction<AppState>>): Actions => ({
  autoIncriment: value => {
    setInterval(() => setState(incriment(value)), 1000);
  },
  incriment: value => setState(incriment(value)),
  decriment: value => setState(decriment(value)),
  setMessage: msg => setState(setMessage(msg))
});
