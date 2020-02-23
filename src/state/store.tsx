import React from "react";
import { reducer, AppState, initialState, Actions } from "./app";
import { counterActions } from "./counter";
import { messageActions } from "./message";

type Store = [AppState, Actions];

export const Store = React.createContext<Store>([initialState, {} as Actions]);

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const { incriment, decriment } = counterActions;
  const { setMessage } = messageActions;

  const actions: Actions = {
    incriment: value => dispatch(incriment(value)),
    decriment: value => dispatch(decriment(value)),
    setMessage: msg => dispatch(setMessage(msg))
  };

  return <Store.Provider value={[state, actions]}>{children}</Store.Provider>;
};
