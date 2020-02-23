import React from "react";
import { AppState, initialState, Actions } from "./app";
import { applyMiddleware } from "./middleware";

type Store = [AppState, Actions];

export const Store = React.createContext<Store>([initialState, {} as Actions]);

export const StoreProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState(initialState as AppState);
  return <Store.Provider value={[state, applyMiddleware(setState)]}>{children}</Store.Provider>;
};
