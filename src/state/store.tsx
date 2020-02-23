import React from "react";
import { AppState, initialState, Actions } from "./app";
import { counterActions } from "./counter";
import { messageActions } from "./message";

type Store = [AppState, Actions];

export const Store = React.createContext<Store>([initialState, {} as Actions]);

export const StoreProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState(initialState as AppState);
  const actions = {...counterActions(setState), ...messageActions(setState)};
  return <Store.Provider value={[state, actions]}>{children}</Store.Provider>;
};
