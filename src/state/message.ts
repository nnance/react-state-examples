import { AppState } from "./app";

export type Message = string;

export type MessageActions = {
  setMessage: (message: Message) => void;
};

export const messageActions = (setState: React.Dispatch<React.SetStateAction<AppState>>): MessageActions => ({
    setMessage: msg => setState((state: AppState) => ({...state, msg}))
  });
