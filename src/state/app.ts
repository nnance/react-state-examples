import { Counter, CounterActions } from "./counter";
import { Message, MessageActions } from "./message";

export type AppState = {
  counter: Counter;
  message: Message;
};

export type Actions = CounterActions & MessageActions;

export const initialState = {
  counter: 100,
  message: "Started"
};
