import React from "react";
import { reducer, AppState, initialState } from "./app";
import { CounterAction } from "./counter";
import { MessageAction } from "./message";

type Actions = CounterAction | MessageAction;

type Store = [AppState, React.Dispatch<Actions>];

export const Store = React.createContext<Store>([initialState, {} as React.Dispatch<Actions>]);

export const StoreProvider: React.FC = ({ children }) => {
  const store = React.useReducer(reducer, initialState);

  return <Store.Provider value={store}>{children}</Store.Provider>;
};
