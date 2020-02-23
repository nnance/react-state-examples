import React from "react";
import { useCounter, Counter, CounterActions } from "./counter";
import { useMessage, Message, MessageActions } from "./message";

export type AppState = {
  counter: Counter;
  message: Message;
};

type Actions = CounterActions & MessageActions;

type Store = [AppState, Actions];

export const Store = React.createContext<Store>([{counter: 0, message: ""}, {} as Actions]);

export const StoreProvider: React.FC = ({ children }) => {
  const [counter, counterActions] = useCounter(100);
  const [message, messageActions] = useMessage("hello");

  const state = { counter, message };
  const actions = { ...counterActions, ...messageActions };

  return <Store.Provider value={[state, actions]}>{children}</Store.Provider>;
};
