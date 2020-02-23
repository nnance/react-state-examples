import React from "react";
import { reducer, AppState, initialState, Actions } from "./app";
import { applyMiddleware } from "./middleware";

type Store = [AppState, Actions];

export const Store = React.createContext<Store>([initialState, {} as Actions]);

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={[state, applyMiddleware(dispatch)]}>{children}</Store.Provider>;
};
