import React from "react";
import { AppState, initialState, Actions } from "./app";
import { counterActions, Counter } from "./counter";
import { messageActions, Message } from "./message";

type Store = [AppState, Actions];

export const Store = React.createContext<Store>([initialState, {} as Actions]);

export const StoreProvider: React.FC = ({ children }) => {
  const [counter, setCounter] = React.useState(100 as Counter);
  const [message, setMessage] = React.useState("hello" as Message);

  const state = { counter, message };

  const actions = {
    ...counterActions(setCounter),
    ...messageActions(setMessage)
  };
  return <Store.Provider value={[state, actions]}>{children}</Store.Provider>;
};
