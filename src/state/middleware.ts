import React from "react";
import { Actions } from "./app";
import { counterActions, CounterAction } from "./counter";
import { messageActions, MessageAction } from "./message";

const { incriment, decriment } = counterActions;
const { setMessage } = messageActions;

export const applyMiddleware = (dispatch: React.Dispatch<CounterAction | MessageAction>): Actions => ({
  autoIncriment: value => {
    setInterval(() => dispatch(incriment(value)), 1000);
  },
  incriment: value => dispatch(incriment(value)),
  decriment: value => dispatch(decriment(value)),
  setMessage: msg => dispatch(setMessage(msg))
});
